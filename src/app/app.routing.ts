import { SchoolClassComponent } from './school-class/school-class.component';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from "./guard/auth.guard";
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: "", redirectTo: "home", pathMatch:"full", canActivate:[AuthGuard] },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent, canActivate:[AuthGuard] },
    { path: "scholl-class", component: SchoolClassComponent, canActivate:[AuthGuard] }
];

export const routing = RouterModule.forRoot(appRoutes);