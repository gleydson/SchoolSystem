import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';

import { AppComponent }           from './app.component';
import { routing }                from './app.routing';
import { LoggedConfig }           from './config/logged.config';
import { TokenConfig }            from './config/token.config'
import { AuthGuard }              from './guard/auth.guard';
import { AuthenticationService }  from './authentication/authentication.service';
import { LoginComponent }         from './login/login.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { HomeComponent }          from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SchoolClassModule } from './school-class/school-class.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministratorComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    SchoolClassModule
  ],
  providers: [AuthGuard, AuthenticationService, LoggedConfig, TokenConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
