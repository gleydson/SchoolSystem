import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';

import { SchoolClassFormComponent } from './school-class-form/school-class-form.component';
import { SchoolClassDetailComponent } from './school-class-detail/school-class-detail.component';
import { SchoolClassNotFoundComponent } from './school-class-not-found/school-class-not-found.component';
import { SchoolClassHomeComponent } from './school-class-home/school-class-home.component';

const schoolClass : Routes = [
    {path : '', component : SchoolClassHomeComponent, children: [
        {path : 'new', component : SchoolClassFormComponent},
        {path : ':id', component : SchoolClassDetailComponent},
        {path : ':id/edit', component : SchoolClassFormComponent},
        {path : 'school-class-not-found', component : SchoolClassNotFoundComponent}
    ]}
];

@NgModule({
    imports : [RouterModule.forChild(schoolClass)],
    exports : [RouterModule]
})
export class SchoolClassRoutingModule { }