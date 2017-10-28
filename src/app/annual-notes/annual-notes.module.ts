import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnualNotesService } from './annual-notes.service';
import { AnnualNotesRoutingModule } from './annual-notes.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AnnualNotesRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AnnualNotesService
  ]
})
export class AnnualNotesModule { }
