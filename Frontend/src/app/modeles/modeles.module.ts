import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModelesRoutingModule } from './modeles-routing.module';
import { ModelesGeneralComponent } from './modeles-general/modeles-general.component';
import { PurgerModelesComponent } from './purger-modeles/purger-modeles.component';

@NgModule({
  imports: [
    CommonModule,
    ModelesRoutingModule
  ],
  declarations: [ModelesGeneralComponent, PurgerModelesComponent]
})
export class ModelesModule { }
