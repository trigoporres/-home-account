import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { ProjectService } from '../service/project.service'
import { AuthService } from '../service/auth.service'


interface projectInfo{
  creator: string,
  name: string,
  quantity: string,
  fin: string,
  description: string
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  user:any;
  creator:any;
   projectInfo:projectInfo={
    creator: "",
    name: "",
    quantity: "",
    fin: "",
    description: "",
  }

  constructor(public project:ProjectService, public router: Router, public auth:AuthService) { }

  ngOnInit() {
  }

  create() {
    this.user = this.auth.getUser();
    this.projectInfo.creator = this.user._id;
    const { creator, name, quantity, fin, description} = this.projectInfo;
    console.log(this.projectInfo)
    this.project.create(this.projectInfo,this.user)
      .subscribe(() =>
        this.router.navigate(['user/'+this.user._id]
      )
  )}



}
