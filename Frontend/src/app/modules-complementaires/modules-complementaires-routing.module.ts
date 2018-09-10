import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModulesComplementairesComponent } from './modules-complementaires.component';

const routes: Routes = [
	{
    	path: '',
    	component: ModulesComplementairesComponent
  	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesComplementairesRoutingModule { }
