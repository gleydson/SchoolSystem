import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplineService } from './discipline.service';
import { DisciplineRoutingModule } from './discipline.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    DisciplineRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    DisciplineService
  ]
})
export class DisciplineModule { }
