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
  error:any;
  user:any;

  constructor(public auth:AuthService, public router: Router, public route:ActivatedRoute, public proj:ProjectService) { }

  ngOnInit() {
    console.log("Entro")
    this.user = this.auth.getUser();

    this.route.params
          .subscribe((params) => {
            this.proj.show(params.id).subscribe(project => {this.successCb(project)})
          })
  }

  successCb(value) {
    this.project= value;
    this.error = null;
  }

  delete(id){
    console.log('/user/'+this.user._id+'/list')
    this.proj.delete(this.user._id, id)
        .subscribe()
        this.router.navigate(['/user/'+this.user._id+'/list'])
  }


}
