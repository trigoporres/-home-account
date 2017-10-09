import { Component, OnInit } from '@angular/core'
import { AuthService } from '../service/auth.service'
import { ExpensesService } from '../service/expenses.service'
import { Router } from '@angular/router'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-expenses',
  templateUrl: './list-expenses.component.html',
  styleUrls: ['./list-expenses.component.css']
})
export class ListExpensesComponent implements OnInit {
  expenses:any;
  error:any;
  user:any;

  constructor(public auth:AuthService, public router: Router, public route:ActivatedRoute, public exp:ExpensesService) { }

  ngOnInit() {
    this.user = this.auth.getUser();

    this.route.params
          .subscribe((params) => {
            this.exp.show(params.id).subscribe(expenses => {this.successCb(expenses)})
          })
  }

  successCb(value) {
    this.expenses= value;
    this.error = null;
  }

  delete(id){
    console.log('/user/'+this.user._id+'/list')
    this.exp.delete(this.user._id, id)
        .subscribe()
        this.router.navigate(['/user/'+this.user._id+'/listExp'])
  }

}
