import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherService } from './teacher.service';
import { TeacherRoutingModule } from './teacher.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TeacherRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    TeacherService
  ]
})
export class TeacherModule { }