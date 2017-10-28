import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoolYearComponent } from './school-year.component';

const schoolYear : Routes = [
    {path : '', component : SchoolYearComponent }
];

@NgModule({
    imports : [RouterModule.forChild(schoolYear)],
    exports : [RouterModule]
})
export class SchoolYearRoutingModule {}