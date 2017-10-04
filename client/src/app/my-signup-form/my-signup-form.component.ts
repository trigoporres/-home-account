import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

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

  error: any;

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

  signup() {
    const { first_name, last_name, email,username, password } = this.signupInfo;
    this.auth.signup(first_name, last_name, email,username, password)
      .subscribe(

      );
  }

}
