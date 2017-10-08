import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class ProjectService {
  public user:any;
  public options = {withCredentials:true};

  constructor(private http: Http) { }

  create(project,user) {
    console.log(user._id)
    return this.http.post(`${BASEURL}/user/${user.id}/project`, {project,user}, this.options)
      .map(res => res.json())
      .subscribe( res=> console.log("va"))
  }

}
