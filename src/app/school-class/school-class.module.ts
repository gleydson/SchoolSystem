import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolClassService } from './school-class.service';
import { SchoolClassDetailComponent } from './school-class-detail/school-class-detail.component';
import { SchoolClassFormComponent } from './school-class-form/school-class-form.component';
import { SchoolClassRoutingModule } from 'app/school-class/school-class.routing.module';
import { SchoolClassNotFoundComponent } from './school-class-not-found/school-class-not-found.component';
import { SchoolClassHomeComponent } from 'app/school-class/school-class-home/school-class-home.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SchoolClassRoutingModule
  ],
  exports: [],
  declarations: [
    SchoolClassHomeComponent,
    SchoolClassFormComponent,
    SchoolClassDetailComponent,
    SchoolClassNotFoundComponent
  ],
  providers: [
    SchoolClassService
  ]
})
export class SchoolClassModule { }
