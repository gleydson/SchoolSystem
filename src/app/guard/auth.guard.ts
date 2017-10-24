import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  public constructor (
      private authenticationService:AuthenticationService,
      private router:Router
  ) { }

  public canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<boolean> | boolean {  
    return this.accessVerify();
  }

  public canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    return this.accessVerify();
  }

  private accessVerify() {
    if(this.authenticationService.isAuthenticated())
      return true;
    this.router.navigate(['/login']);
    return false;
  }

}