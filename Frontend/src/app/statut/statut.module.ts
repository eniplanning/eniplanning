import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatutRoutingModule } from './statut-routing.module';
import { StatutComponent } from './statut.component';

@NgModule({
  imports: [
    CommonModule,
    StatutRoutingModule
  ],
  declarations: [StatutComponent]
})
export class StatutModule { }
