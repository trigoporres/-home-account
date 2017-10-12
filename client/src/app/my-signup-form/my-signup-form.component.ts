import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

interface SignupForm{
  first_name: string,
  last_name: string,
  email: string,
  username: string,
  password: string,
}

@Component({
  selector: 'app-my-signup-form',
  templateUrl: './my-signup-form.component.html',
  styleUrls: ['./my-signup-form.component.css']
})
export class MySignupFormComponent implements OnInit {

  signupInfo:SignupForm = {
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
  };

  user;
  error: any;

  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
  }

  signup() {
    const { first_name, last_name, email,username, password } = this.signupInfo;
    this.auth.signup(first_name, last_name, email,username, password)
      .subscribe(result =>

          this.auth.login(username, password)
             .subscribe(result =>
               this.router.navigate(["/user/"+result._id+"/form/edit"]),
             )
         )
  }

}
