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
    console.log(`${BASEURL}/user/${expenses.creator}/expenses`);
    return this.http.post(`${BASEURL}/user/${expenses.creator}/expenses`,{expenses}, this.options)
      .map(res => res.json())
      .subscribe()
      }
}
