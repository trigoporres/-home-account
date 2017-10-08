import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL;


@Injectable()
export class ProjectService {
  public project:any;
  public user:any;
  public options = {withCredentials:true};

  constructor(private http: Http) { }

  create(project,user) {
    return this.http.post(`${BASEURL}/user/${user._id}/project`, {project,user}, this.options)
      .map(res => res.json())
      .subscribe()
  }

  show(user){
    return this.http.get(`${BASEURL}/user/${user}/project`, this.options)
      .map(res=> res.json())
  }




}
