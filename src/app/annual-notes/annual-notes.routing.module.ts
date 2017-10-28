import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AnnualNotesComponent } from './annual-notes.component';

const annualNotes : Routes = [
    {path : '', component : AnnualNotesComponent }
];

@NgModule({
    imports : [RouterModule.forChild(annualNotes)],
    exports : [RouterModule]
})
export class AnnualNotesRoutingModule {}