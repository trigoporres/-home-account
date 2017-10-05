import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {routes} from './routes';

import { AppComponent } from './app.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UpdateUserComponent } from './update-user/update-user.component';

import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { IsLoggedInService } from './service/is-logged-in.canactivate.service';


@NgModule({
  declarations: [
    AppComponent,
    MySignupFormComponent,
    LoginComponent,
    UserComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AuthService , IsLoggedInService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
