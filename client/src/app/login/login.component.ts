import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'
interface LoginForm{
  username: string,
  password: string,
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginInfo:LoginForm = {
    username: "",
    password: "",
  };
  user;
  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
  }

  login() {
    const {username, password } = this.loginInfo;
    this.auth.login(username, password)
       .subscribe(result =>
         this.router.navigate(["/user/"+result._id]),
       );
    }

}
