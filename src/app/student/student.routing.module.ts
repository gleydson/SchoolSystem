import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { StudentFormComponent } from 'app/student/student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentComponent } from './student.component';

const student : Routes = [
    {path : '', component : StudentComponent, children: [
        {path : 'new', component : StudentFormComponent},
        {path : ':id', component : StudentDetailComponent},
        {path : ':id/edit', component : StudentFormComponent},
        {path : 'student-not-found', component : StudentNotFoundComponent}
    ]}
];

@NgModule({
    imports : [RouterModule.forChild(student)],
    exports : [RouterModule]
})
export class SchoolClassRoutingModule { }