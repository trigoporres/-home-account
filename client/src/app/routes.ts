
import { Routes } from '@angular/router';

import {MySignupFormComponent} from './my-signup-form/my-signup-form.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component'
import {UpdateUserComponent} from './update-user/update-user.component'
import {ProjectComponent} from './project/project.component'
import {ExpensesComponent} from './expenses/expenses.component'
import {DebtComponent} from './debt/debt.component'
import {ListPorjectComponent} from './list-porject/list-porject.component'
import {FormComponent} from './form/form.component'
import {ListExpensesComponent} from './list-expenses/list-expenses.component'
import {ListDebtComponent} from './list-debt/list-debt.component'




export const routes: Routes = [
    { path: '',
      component: MySignupFormComponent,
    },
    { path: 'user/:id', component: UserComponent},
    { path: 'user/:id/list', component: ListPorjectComponent},
    { path: 'user/:id/listExp', component: ListExpensesComponent},
    { path: 'user/:id/listDebt', component: ListDebtComponent},
    {path: 'user/:id/form', component: FormComponent,
      children: [
        {path: 'edit', component: UpdateUserComponent},
        {path: 'project', component: ProjectComponent},
        {path: 'expenses', component: ExpensesComponent},
        {path: 'debt', component: DebtComponent}
      ]
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    { path: '**', redirectTo: '' }
];
