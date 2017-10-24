import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Administrator } from './../administrator/administrator';
import { Constants } from './../util/constants.util';
import { TokenConfig } from './../config/token.config';
import { LoggedConfig } from './../config/logged.config';

@Injectable()
export class AuthenticationService {

    public constructor (
        private http : Http,
        private router : Router,
        private tokenConfig : TokenConfig,
        private loggedConfig : LoggedConfig
    ) { }

    public login(admin : Administrator) {
        return this.http.post(`${Constants.URL_LOGIN}`, {username : admin.username, password : admin.password}, this.headers())
        .map((response : Response) => {
            if (response.status == 200) {
                this.loggedConfig.setLocalIsLogged("true");
                this.tokenConfig.setLocalToken(response.headers.get("authorization"));
                this.router.navigate(['/home']);
            }
        })
        .catch((error : Response) => Observable.throw(error));
    }

    private headers() {
        return new RequestOptions({ headers: new Headers({'Content-Type' : 'application/json'}) });
    }

    public logout() {
        this.loggedConfig.removerLocalIsLogged();
        this.tokenConfig.removerLocalToken();
        this.router.navigate(['/login']);
    }
    
    public isAuthenticated() : Boolean {
        if (Boolean(this.loggedConfig.getLocalIsLogged()) == true)
            return true;
        return false;
    }

}
