import { Component, OnInit } from '@angular/core'
import { AuthService } from '../service/auth.service'
import { ProjectService } from '../service/project.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user:any;
  project:any;
  error:any
  constructor(public auth:AuthService, public router: Router, public proj:ProjectService, public route:ActivatedRoute) { }

  ngOnInit() {
    console.log("entro")
    this.user = this.auth.getUser();
    this.route.params
          .subscribe((params) => {
            this.proj.show(params.id).subscribe(project => {this.successCb(project)})
          })
    this.auth.getLoginEventEmitter()
        .subscribe( user => this.user=user );
  }


  logout() {
    this.auth.logout()
        .subscribe(result =>
           this.router.navigate(["/"])
        );
  }

  successCb(value) {
    this.project= value;
    this.error = null;
  }

}
