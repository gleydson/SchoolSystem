import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from 'app/student/student.component';
import { StudentNotFoundComponent } from './student-not-found/student-not-found.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentService } from './student.service';

@NgModule({
  imports: [
    CommonModule
  ],
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
