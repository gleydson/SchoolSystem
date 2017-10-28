import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelativeService } from './relative.service';
import { RelativeRoutingModule } from './relative.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RelativeRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    RelativeService
  ]
})
export class RelativeModule { }
