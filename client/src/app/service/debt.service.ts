import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL;

@Injectable()
export class DebtService {
  public debt:any;
  public user:any;
  public options = {withCredentials:true};

  constructor(private http: Http) { }

  create(debt,user){
    console.log(debt)
    return this.http.post(`${BASEURL}/user/${user._id}/debt`,{debt,user}, this.options)
      .map(res => res.json())
      }

  show(user){
    return this.http.get(`${BASEURL}/user/${user}/debt`, this.options)
    .map(res=> res.json())
  }

  delete(user, id){
    return this.http.delete(`${BASEURL}/user/${user}/debt/${id}`, this.options)
      .map(res=> res.json())
  }
}
