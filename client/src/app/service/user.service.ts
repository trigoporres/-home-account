import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/user";

@Injectable()
export class UserService {

  private user:object;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};

  constructor(private http: Http) {
  }

  private emitUserLoginEvent(user){
    this.user = user;
    this.userLoginEvent.emit(user);
    return user;
  }

  private handleError(e) {
    console.log("AUTH ERROR");
    return Observable.throw(e.json().message);
  }

  update(first_name, last_name, email) {
    return this.http.put(`${BASEURL}/:id`, {first_name, last_name, email}, this.options)
      .map(res => res.json())
      .map(user => this.emitUserLoginEvent(user))
      .catch(this.handleError);
  }

}
