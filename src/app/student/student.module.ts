import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student.component';
import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentRoutingModule } from './student.routing.module';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    StudentRoutingModule
  ],
  exports: [],
  declarations: [
    StudentComponent,
    StudentFormComponent,
    StudentDetailComponent,
    StudentNotFoundComponent
  ],
  providers: [
    StudentService
  ]
})
export class StudentModule { }
