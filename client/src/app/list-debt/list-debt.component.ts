import { Component, OnInit } from '@angular/core'
import { AuthService } from '../service/auth.service'
import { DebtService } from '../service/debt.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-debt',
  templateUrl: './list-debt.component.html',
  styleUrls: ['./list-debt.component.css']
})
export class ListDebtComponent implements OnInit {
  error:any;
  user:any;
  debts:any;

  constructor(public auth:AuthService, public router: Router, public route:ActivatedRoute, public debt:DebtService) { }

  ngOnInit() {
    this.user = this.auth.getUser();
    this.route.params
          .subscribe((params) => {
            this.debt.show(params.id).subscribe(debt => this.debts=debt)
          })
  }

  successCb(value) {
    this.debt= value;
    this.error = null;
  }

  delete(id){
    console.log('/user/'+this.user._id+'/list')
    this.debt.delete(this.user._id, id)
        .subscribe(()=>
        this.route.params
              .subscribe((params) => {
                this.debt.show(params.id).subscribe(debt => this.debts=debt)
              })
      )}

}
