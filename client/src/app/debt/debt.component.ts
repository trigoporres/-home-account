import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { AuthService } from '../service/auth.service'
import { DebtService } from '../service/debt.service'

interface debtInfo{
	name : string,
	quantity : number,
	fin : Date,
}

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {
  user:any;
  debtInfo = {
    name : "",
    quantity : "",
    fin : "",
  }

  constructor(public debt:DebtService, public router: Router, public auth:AuthService) { }

  ngOnInit() {
  }

  create() {
    this.user = this.auth.getUser();
    const { name, quantity, fin} = this.debtInfo;
    console.log(this.debtInfo)
    this.debt.create(this.debtInfo,this.user)
    this.router.navigate(['user/'+this.user._id])
  }

}
