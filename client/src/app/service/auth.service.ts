
import { Injectable, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import 'rxjs';
import {environment} from '../../environments/environment';

const BASEURL = environment.BASEURL + "/auth";

@Injectable()
export class AuthService {
  public user:any;
  private userLoginEvent:EventEmitter<any> = new EventEmitter<any>();
  private options = {withCredentials:true};

  constructor(private http: Http) {
  }

    public getLoginEventEmitter():EventEmitter<any>{
      return this.userLoginEvent;
    }

    public getUser(){
      return this.user;
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

    signup(first_name, last_name, email,username, password) {
      return this.http.post(`${BASEURL}/signup`, {first_name, last_name, email,username, password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    login(username,password) {
      console.log(username,password)
      return this.http.post(`${BASEURL}/login`, {username,password}, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }

    edit(id,user) {
      console.log(id)
      console.log(user)
      return this.http.put(`${BASEURL}/user/${id}`,user, this.options)
      .map((res) => res.json());
    }

    logout() {
      return this.http.get(`${BASEURL}/logout`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(null))
        .catch(this.handleError);
    }

    isLoggedIn() {
      return this.http.get(`${BASEURL}/loggedin`, this.options)
        .map(res => res.json())
        .map(user => this.emitUserLoginEvent(user))
        .catch(this.handleError);
    }
}
