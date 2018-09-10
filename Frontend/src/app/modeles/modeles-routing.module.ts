import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModelesGeneralComponent } from './modeles-general/modeles-general.component';
import { PurgerModelesComponent } from './purger-modeles/purger-modeles.component';

const routes: Routes = [
	  {
    	path: '',
    	component: ModelesGeneralComponent
  	},
  	{
  		path: 'purger',
  		component: PurgerModelesComponent
  	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModelesRoutingModule { }
