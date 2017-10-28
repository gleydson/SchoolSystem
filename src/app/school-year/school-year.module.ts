import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolYearService } from './school-year.service';
import { SchoolYearRoutingModule } from './school-year.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SchoolYearRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    SchoolYearService
  ]
})
export class SchoolYearModule { }
