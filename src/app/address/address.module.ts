import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressService } from './address.service';
import { AddressRoutingModule } from './address.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AddressRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AddressService
  ]
})
export class AddressModule { }
