import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ProjectService } from '../service/project.service'
import { AuthService } from '../service/auth.service'


interface projectInfo{
  name: string,
  quantity: string,
  fin: string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  user:any;
   projectInfo:projectInfo={
    name: "",
    quantity: "",
    fin: ""
  }

  constructor(public project:ProjectService, public router: Router, public auth:AuthService) { }

  ngOnInit() {
  }

  create() {
    this.user = this.auth.getUser();
    const { name, quantity, fin} = this.projectInfo;
    this.project.create(this.projectInfo,this.user)
      .subscribe(() =>
        this.router.navigate(['user/'+this.user._id]
      )
  )}



}
