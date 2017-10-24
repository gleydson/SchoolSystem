import { BrowserModule }          from '@angular/platform-browser';
import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { HttpModule }             from '@angular/http';
import { ModuleWithProviders }    from '@angular/core';

import { MaterializeModule }      from 'angular2-materialize';

import { AppComponent }           from './app.component';
import { LoggedConfig }           from './config/logged.config';
import { TokenConfig }            from './config/token.config'
import { AuthGuard }              from './guard/auth.guard';
import { AuthenticationService }  from './authentication/authentication.service';
import { LoginComponent }         from './login/login.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { HomeComponent }          from './home/home.component';
import { NavbarComponent }        from './navbar/navbar.component';
import { PageNotFoundComponent }  from './page-not-found/page-not-found.component';
import { AppRoutingModule }       from 'app/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministratorComponent,
    HomeComponent,
    NavbarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    LoggedConfig,
    TokenConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
