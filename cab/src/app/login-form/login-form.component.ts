import { Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../_services/login.service';
import {Http} from '@angular/http';
import {HttpModule} from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
  providers:[LoginService]
})
export class LoginFormComponent implements OnInit {
  apiRoot: string = "http://httpbin.org";
   constructor(private LoginService:LoginService, private http : Http, private router:Router) {
    }
    ngOnInit() {
    }
  user={"username":'',"password":''};
  validateUSer(form: NgForm){
    const userDate=form.value;
   // let url = this.apiRoot+"/get";
   // this.http.get(url).subscribe(res => console.log(res.text())); 
    this.LoginService.validateUser().subscribe(res => {
      console.log(res.text());
      this.router.navigate(['home']);
   })
  }
}
