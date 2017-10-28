import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TeacherComponent } from './teacher.component';

const teacher : Routes = [
    {path : '', component : TeacherComponent }
];

@NgModule({
    imports : [RouterModule.forChild(teacher)],
    exports : [RouterModule]
})
export class TeacherRoutingModule {}