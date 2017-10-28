import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactInformationComponent } from './contact-information.component';

const contactInformation : Routes = [
    {path : '', component : ContactInformationComponent }
];

@NgModule({
    imports : [RouterModule.forChild(contactInformation)],
    exports : [RouterModule]
})
export class ContactInformationRoutingModule {}