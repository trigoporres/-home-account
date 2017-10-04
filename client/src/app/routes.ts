
import { Routes } from '@angular/router';

import {MySignupFormComponent} from './my-signup-form/my-signup-form.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component'

export const routes: Routes = [
    { path: '',
      component: MySignupFormComponent,
    },
    { path: 'user',
      component: UserComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    { path: '**', redirectTo: '' }
];
