import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlanningsEnDefautComponent } from './plannings-en-defaut.component';

const routes: Routes = [
	{
		path: '',
		component: PlanningsEnDefautComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanningsEnDefautRoutingModule { }
