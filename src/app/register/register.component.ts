import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
// import { Headers }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl()
  });
  constructor(private _http: Http, private _router: Router) { }

  ngOnInit() {
  }

  public register() {
    // tslint:disable-next-line:max-line-length
    const data = 'username=' + this.registerForm.value.username + '&password=' + this.registerForm.value.password + '&firstName=' + this.registerForm.value.firstName + '&lastName=' + this.registerForm.value.lastName;

    const headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this._http.post('http://localhost:8080/it255/registerservice.php', data, { headers: headers}).subscribe((result) => {
          const obj = JSON.parse(result['_body']);
          // localStorage.setItem('token', obj.token);
          this._router.navigateByUrl('');
       },
        err => {
          
          const element  = <HTMLElement> document.getElementsByClassName('alert')[0];
          element.style.display = 'block';
         
        }
      );
  }

}
