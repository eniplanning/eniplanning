import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesComplementairesRoutingModule } from './modules-complementaires-routing.module';
import { ModulesComplementairesComponent } from './modules-complementaires.component';

@NgModule({
  imports: [
    CommonModule,
    ModulesComplementairesRoutingModule
  ],
  declarations: [ModulesComplementairesComponent]
})
export class ModulesComplementairesModule { }
