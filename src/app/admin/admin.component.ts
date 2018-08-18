import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
// import { Headers }
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  public adminForm = new FormGroup({
    id: new FormControl(),
    series: new FormControl(),
    year: new FormControl()
  });
  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  public addCar() {
    const data = '&series=' + this.adminForm.value.series + '&year=' + this.adminForm.value.year;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this._http.post('http://localhost:8080/it255/addCar.php', data, { headers: headers}).subscribe((result) => {
          const obj = JSON.parse(result['_body']);
          
          this._router.navigateByUrl('');
       },
        err => {  
          const element  = <HTMLElement> document.getElementsByClassName('alert')[0];
          element.style.display = 'block';
         
        }
      );
  }
  public deleteCar() {
    const data = 'id=' + this.adminForm.value.id;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('token', localStorage.getItem('token'));
    this._http.post('http://localhost:8080/it255/deleteCar.php', data, { headers: headers }).subscribe((result) => {
      const obj = JSON.parse(result['_body']);
      this._router.navigateByUrl('');
     
    },
      err => {
       
      }
    );
  }

}

