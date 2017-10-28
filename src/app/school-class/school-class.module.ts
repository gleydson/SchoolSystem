import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchoolClassService } from './school-class.service';
import { SchoolClassDetailComponent } from './school-class-detail/school-class-detail.component';
import { SchoolClassFormComponent } from './school-class-form/school-class-form.component';
import { SchoolClassRoutingModule } from './school-class.routing.module';
import { SchoolClassNotFoundComponent } from './school-class-not-found/school-class-not-found.component';
import { SchoolClassShowComponent } from './school-class-show/school-class-show.component';
import { SchoolClassBreadcrumbsComponent } from './school-class-breadcrumbs/school-class-breadcrumbs.component';
import { SchoolClassComponent } from './school-class.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    SchoolClassRoutingModule
  ],
  exports: [],
  declarations: [
    SchoolClassComponent,
    SchoolClassShowComponent,
    SchoolClassFormComponent,
    SchoolClassDetailComponent,
    SchoolClassNotFoundComponent,
    SchoolClassBreadcrumbsComponent,
  ],
  providers: [
    SchoolClassService
  ]
})
export class SchoolClassModule { }
