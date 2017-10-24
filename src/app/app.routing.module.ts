import { ModuleWithProviders } from '@angular/core';
import { StudentComponent } from './student/student.component';
import { RouterModule, Routes, LoadChildren } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { SchoolClassDetailComponent } from './school-class/school-class-detail/school-class-detail.component';
import { SchoolClassHomeComponent } from './school-class/school-class-home/school-class-home.component';
import { AuthGuard } from './guard/auth.guard';

const APP_ROUTE: Routes = [
    {
        path: 'school-class',
        component: SchoolClassHomeComponent,
        loadChildren: 'app/school-class/school-class.module#SchoolClassModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'student',
        component: StudentComponent,
        loadChildren: 'app/student/student.module#StudentModule',
        canLoad: [AuthGuard]
    },
    { path: 'login', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports : [RouterModule.forRoot(APP_ROUTE)],
    exports : [RouterModule]
})
export class AppRoutingModule { }