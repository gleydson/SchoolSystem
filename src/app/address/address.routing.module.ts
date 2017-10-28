import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddressComponent } from './address.component';

const address : Routes = [
    {path : '', component : AddressComponent }
];

@NgModule({
    imports : [RouterModule.forChild(address)],
    exports : [RouterModule]
})
export class AddressRoutingModule {}