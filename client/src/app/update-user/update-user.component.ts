import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user:any;
  updateInfo = {
    _id: "",
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phone: "",
    salary: "",
    balance: "",
  }
  error:string;

  constructor(
    private auth: AuthService,
    private router: Router) {}

  ngOnInit() {
    this.successCb(this.auth.user);
  }

  update() {
    this.auth.update(this.updateInfo._id, this.updateInfo)
        .subscribe(
          (user) => this.successCb(user),
          (err) => this.errorCb(err)

        );
        this.router.navigate(['user/'+this.updateInfo._id])
  }

  errorCb(err) {
   this.error = err;
   this.user = null;
 }

 successCb(user) {
   this.updateInfo
    = user;
   this.error = null;
 }

}
