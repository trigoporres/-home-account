
import { Routes } from '@angular/router';

import {MySignupFormComponent} from './my-signup-form/my-signup-form.component';
import {LoginComponent} from './login/login.component';
import {UserComponent} from './user/user.component'
import {UpdateUserComponent} from './update-user/update-user.component'
import {ProjectComponent} from './project/project.component'

export const routes: Routes = [
    { path: '',
      component: MySignupFormComponent,
    },
    { path: 'user/:id', component: UserComponent,
          children: [
            {path: 'edit', component: UpdateUserComponent},
            {path: 'project', component: ProjectComponent}
          ]
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    { path: '**', redirectTo: '' }
];
