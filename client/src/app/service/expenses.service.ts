import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL;


@Injectable()
export class ExpensesService {
  public expenses:any;
  public user:any;
  public options = {withCredentials:true};

  constructor(private http: Http) { }

  create(expenses){
    return this.http.post(`${BASEURL}/user/${expenses.creator}/expenses`,{expenses}, this.options)
      .map(res => res.json())
      }

  show(user){
    return this.http.get(`${BASEURL}/user/${user}/expenses`, this.options)
      .map(res=> res.json())
  }

  delete(user, id){
    return this.http.delete(`${BASEURL}/user/${user}/expenses/${id}`, this.options)
      .map(res=> res.json())
  }
}
