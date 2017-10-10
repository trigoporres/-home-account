import { Component, OnInit } from '@angular/core'
import { AuthService } from '../service/auth.service'
import { ProjectService } from '../service/project.service'
import { ExpensesService } from '../service/expenses.service'
import { DebtService } from '../service/debt.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:any;
  debts:any;
  project:any;
  error:any
  expenses:any;
  total:any;

  constructor(public auth:AuthService, public router: Router, public proj:ProjectService, public route:ActivatedRoute, public expen:ExpensesService, public debt:DebtService) { }

  ngOnInit() {
  this.auth.isLoggedIn().subscribe(result =>{
    this.user=result
  })


    this.route.params
          .subscribe((params) => {
            this.proj.show(params.id).subscribe(project => this.project=project)
          })
    this.route.params
          .subscribe((params) => {
            this.expen.show(params.id).subscribe(expenses => this.expenses=expenses)
          })
    this.route.params
          .subscribe((params) => {
            this.debt.show(params.id).subscribe(debt => this.debts=debt)
          })
    this.auth.getLoginEventEmitter()
        .subscribe( user =>{
          this.user=user
          this.total = this.user.salary + this.user.money
        });
  }


  logout() {
    this.auth.logout()
        .subscribe(result =>
           this.router.navigate(["/"])
        );
  }


}
