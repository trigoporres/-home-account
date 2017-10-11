import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../service/auth.service'
import { ExpensesService } from '../service/expenses.service'


interface expensesInfo{
  creator: string,
	name : string,
	company : string,
	quantity : number,
	type : string,
}

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
  user:any;
  expensesInfo = {
    creator: "",
  	name : "",
  	company : "",
  	quantity : "",
  	type: ""
  }

  constructor(public expenses:ExpensesService, public router: Router, public auth:AuthService) { }

  ngOnInit() {
  }

  create() {
    this.user = this.auth.getUser();
    this.expensesInfo.creator = this.user._id;
    const { name, company, quantity, type} = this.expensesInfo;
    this.expenses.create(this.expensesInfo,this.user).subscribe(() =>
    this.router.navigate(['user/'+this.user._id])
  )}





}
