import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningComponent } from './planning-general/planning.component';
import { PurgerPlanningComponent } from './purger-planning/purger-planning.component';
import { PlanningsEnDefautComponent } from './plannings-en-defaut/plannings-en-defaut.component';

const routes: Routes = [
	  {
    	path: '',
    	component: PlanningComponent
  	},
  	{
  		path: 'purger',
  		component: PurgerPlanningComponent
  	},
    {
      path: 'en-defaut',
      component: PlanningsEnDefautComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningRoutingModule { }
