import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactInformationService } from './contact-information.service';
import { ContactInformationRoutingModule } from './contact-information.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    ContactInformationRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    ContactInformationService
  ]
})
export class ContactInformationModule { }
