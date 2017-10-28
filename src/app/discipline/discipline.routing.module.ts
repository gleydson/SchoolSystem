import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DisciplineComponent } from './discipline.component';

const discipline : Routes = [
    {path : '', component : DisciplineComponent }
];

@NgModule({
    imports : [RouterModule.forChild(discipline)],
    exports : [RouterModule]
})
export class DisciplineRoutingModule {}