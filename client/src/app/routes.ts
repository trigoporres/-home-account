
import { Routes } from '@angular/router';

import {MySignupFormComponent} from './my-signup-form/my-signup-form.component';

export const routes: Routes = [
    { path: '',
      component: MySignupFormComponent,
    },
    { path: '**', redirectTo: '' }
];
