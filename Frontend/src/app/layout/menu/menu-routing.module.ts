import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Lazy loading. Real routes are defined in each module (modulename-routing.module)
const routes: Routes = [
	{
		path: 'planning',
		loadChildren: '../../planning/planning.module#PlanningModule'
	},
	{
		path: 'plannings-en-defaut',
		loadChildren: '../../plannings-en-defaut/plannings-en-defaut.module#PlanningsEnDefautModule'
	},
	{
		path: 'modeles',
		loadChildren: '../../modeles/modeles.module#ModelesModule'
	},
	{
		path: 'mon-compte',
		loadChildren: '../../mon-compte/mon-compte.module#MonCompteModule'
	},
	{
		path: 'modules-complementaires',
		loadChildren: '../../modules-complementaires/modules-complementaires.module#ModulesComplementairesModule'
	},
	{
		path: 'modules',
		loadChildren: '../../modules/modules.module#ModulesModule'
	},
	{
		path: 'admin/logs',
		loadChildren: '../../logs/logs.module#LogsModule'
	},
	{
		path: 'admin/statut',
		loadChildren: '../../statut/statut.module#StatutModule'
	},
	{
		path: 'admin/utilisateurs',
		loadChildren: '../../utilisateurs/utilisateurs.module#UtilisateursModule'
	},
	{
		path: 'login',
		loadChildren: '../../login/login.module#LoginModule'
	},
	{
	  path: '',
	  redirectTo: 'planning',
	  pathMatch: 'full'
	}
]

@NgModule({
	imports: [RouterModule.forChild(routes)],
  	exports: [RouterModule]
})
export class MenuRoutingModule {}
