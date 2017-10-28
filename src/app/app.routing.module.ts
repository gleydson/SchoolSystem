import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guard/auth.guard';

const APP_ROUTE: Routes = [
    {
        path: 'address',
        loadChildren: 'app/address/address.module#AddressModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'administrator',
        loadChildren: 'app/administrator/administrator.module#AdministratorModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'annual-notes',
        loadChildren: 'app/annual-notes/annual-notes.module#AnnualNotesModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'contact-information',
        loadChildren: 'app/contact-information/contact-information.module#ContactInformationModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'discipline',
        loadChildren: 'app/discipline/discipline.module#DisciplineModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'relative',
        loadChildren: 'app/relative/relative.module#RelativeModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'school-class',
        loadChildren: 'app/school-class/school-class.module#SchoolClassModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'school-year',
        loadChildren: 'app/school-year/school-year.module#SchoolYearModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'student',
        loadChildren: 'app/student/student.module#StudentModule',
        canLoad: [AuthGuard]
    },
    {
        path: 'teacher',
        loadChildren: 'app/teacher/teacher.module#TeacherModule',
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