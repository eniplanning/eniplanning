import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesRoutingModule
  ],
  declarations: [ModulesComponent]
})
export class ModulesModule { }
