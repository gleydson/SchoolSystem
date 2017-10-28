import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdministratorComponent } from './administrator.component';

const administrator : Routes = [
    {path : '', component : AdministratorComponent }
];

@NgModule({
    imports : [RouterModule.forChild(administrator)],
    exports : [RouterModule]
})
export class AdministratorRoutingModule {}