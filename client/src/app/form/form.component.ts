import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:any;
  constructor(public auth:AuthService, public router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    console.log(this.user)
  }

}
