import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SchoolClassFormComponent } from './school-class-form/school-class-form.component';
import { SchoolClassDetailComponent } from './school-class-detail/school-class-detail.component';
import { SchoolClassComponent } from './school-class.component';

const schoolClass = [
    {path : 'school-class', component : SchoolClassComponent, children: [
        {path : 'new', component : SchoolClassFormComponent},
        {path : ':id', component : SchoolClassDetailComponent},
        {path : ':id/edit', component : SchoolClassFormComponent}
    ]}
];

@NgModule({
    imports : [RouterModule.forChild(schoolClass)]
})
export class SchoolClassRoutingModule { }