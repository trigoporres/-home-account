import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { AuthService } from './service/auth.service';
import { IsLoggedInService } from './service/is-logged-in.canactivate.service';
import { RouterModule } from '@angular/router';
import {routes} from './routes';


@NgModule({
  declarations: [
    AppComponent,
    MySignupFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ AuthService , IsLoggedInService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
