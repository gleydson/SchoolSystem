import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RelativeComponent } from './relative.component';

const relative : Routes = [
    {path : '', component : RelativeComponent }
];

@NgModule({
    imports : [RouterModule.forChild(relative)],
    exports : [RouterModule]
})
export class RelativeRoutingModule {}