import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolClassComponent } from './school-class.component';
import { SchoolClassDetailComponent } from './school-class-detail/school-class-detail.component';
import { SchoolClassFormComponent } from './school-class-form/school-class-form.component';
import { SchoolClassRoutingModule } from 'app/school-class/school-class.routing.module';

@NgModule({
  imports: [
    CommonModule,
    SchoolClassRoutingModule
  ],
  declarations: [
    SchoolClassComponent,
    SchoolClassFormComponent,
    SchoolClassDetailComponent
  ]
})
export class SchoolClassModule { }
