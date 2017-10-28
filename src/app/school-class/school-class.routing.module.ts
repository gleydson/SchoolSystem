import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { SchoolClassFormComponent } from './school-class-form/school-class-form.component';
import { SchoolClassDetailComponent } from './school-class-detail/school-class-detail.component';
import { SchoolClassNotFoundComponent } from './school-class-not-found/school-class-not-found.component';
import { SchoolClassShowComponent } from './school-class-show/school-class-show.component';
import { SchoolClassComponent } from './school-class.component';

const schoolClass : Routes = [
    {path : '', component : SchoolClassComponent, children: [
        { path: '', redirectTo: 'show', pathMatch: 'full' },
        { path : 'show', component : SchoolClassShowComponent },
        { path : 'new', component : SchoolClassFormComponent },
        { path : ':id', component : SchoolClassDetailComponent },
        { path : ':id/edit', component : SchoolClassFormComponent },
        { path : '**', component : SchoolClassNotFoundComponent }
    ]},
];

@NgModule({
    imports : [RouterModule.forChild(schoolClass)],
    exports : [RouterModule]
})
export class SchoolClassRoutingModule { }