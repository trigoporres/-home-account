import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user;
  updateInfo;


  constructor(public auth:AuthService, public userService: UserService, public router: Router) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.auth.getLoginEventEmitter()
       .subscribe( user => this.user = user)
       console.log(this.user)
       this.updateInfo = {
         _id: this.user._id,
         first_name: this.user.first_name,
         last_name: this.user.last_name,
         username: this.user.username,
         email: this.user.email,
         phone: this.user.phone,
         salary: this.user.salary
       }
       console.log(this.updateInfo)
  }



  update() {
    console.log("me llamas")
    this.userService.update(this.updateInfo)
      .subscribe(user =>
          this.router.navigate(["/user/"+user._id]),
          )
          console.log(this.updateInfo)
  }

}
