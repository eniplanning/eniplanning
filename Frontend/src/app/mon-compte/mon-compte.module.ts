import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MonCompteRoutingModule } from './mon-compte-routing.module';
import { MonCompteComponent } from './mon-compte.component';

@NgModule({
  imports: [
    CommonModule,
    MonCompteRoutingModule
  ],
  declarations: [MonCompteComponent]
})
export class MonCompteModule { }
