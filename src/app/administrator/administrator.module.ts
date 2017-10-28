import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorService } from './administrator.service';
import { AdministratorRoutingModule } from './administrator.routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    AdministratorRoutingModule
  ],
  exports: [],
  declarations: [],
  providers: [
    AdministratorService
  ]
})
export class AdministratorModule { }
