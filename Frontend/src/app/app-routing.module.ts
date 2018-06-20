import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Lazy loading. Real routes are defined in each module (modulename-routing.module)
const routes: Routes = [
	{
		path: 'planning',
		loadChildren: './planning/planning.module#PlanningModule'
	},
	{
		path: 'modeles',
		loadChildren: './modeles/modeles.module#ModelesModule'
	},
	{
		path: 'mon-compte',
		loadChildren: './mon-compte/mon-compte.module#MonCompteModule'
	},
	{
		path: 'login',
		loadChildren: './login/login.module#LoginModule'
	},
	{
	  path: '',
	  redirectTo: 'planning',
	  pathMatch: 'full'
	}
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule {}