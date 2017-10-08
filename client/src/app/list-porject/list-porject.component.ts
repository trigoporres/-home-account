import { Component, OnInit } from '@angular/core'
import { AuthService } from '../service/auth.service'
import { ProjectService } from '../service/project.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-porject',
  templateUrl: './list-porject.component.html',
  styleUrls: ['./list-porject.component.css']
})
export class ListPorjectComponent implements OnInit {
  project:any;
  error:any

  constructor(public auth:AuthService, public router: Router, public proj:ProjectService, public route:ActivatedRoute) { }

  ngOnInit() {}
  

}
