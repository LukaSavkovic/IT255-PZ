import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public storeForm = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    series: new FormControl(),
    year: new FormControl()
  });
  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }
  public buyCar() {

    const data = '&firstName=' + this.storeForm.value.firstName + '&lastName=' + this.storeForm.value.lastName + '&series=' + this.storeForm.value.series + '&year=' + this.storeForm.value.year;
    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this._http.post('http://localhost:8080/it255/buyCar.php', data, { headers: headers}).subscribe((result) => {
          const obj = JSON.parse(result['_body']);
          
          this._router.navigateByUrl('');
       },
      err => {
        const element = <HTMLElement>document.getElementsByClassName('alert')[0];
        element.style.display = 'block';

      }
    );
  }

}


