import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './utils/guards/auth.guard';
import { LoggedGuard } from './utils/guards/logged.guard';
import { OnlyPedagGuard } from './utils/guards/onlypedag.guard';
import { OnlyAdminGuard } from './utils/guards/onlyadmin.guard';
import { NoChangeAllowed } from './utils/guards/nochangeallowed.guard';

//Lazy loading. Real routes are defined in each module (modulename-routing.module)
const routes: Routes = [
	{
		path: 'planning',
		loadChildren: './planning/planning.module#PlanningModule',
		canActivate: [AuthGuard] 
	},
	{
		path: 'plannings-en-defaut',
		loadChildren: './plannings-en-defaut/plannings-en-defaut.module#PlanningsEnDefautModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'modeles',
		loadChildren: './modeles/modeles.module#ModelesModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'mon-compte',
		loadChildren: './mon-compte/mon-compte.module#MonCompteModule',
		canActivate: [AuthGuard, NoChangeAllowed] 
	},
	{
		path: 'modules-complementaires',
		loadChildren: './modules-complementaires/modules-complementaires.module#ModulesComplementairesModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'modules',
		loadChildren: './modules/modules.module#ModulesModule',
		canActivate: [OnlyPedagGuard] 
	},
	{
		path: 'admin/logs',
		loadChildren: './logs/logs.module#LogsModule',
		canActivate: [OnlyAdminGuard] 
	},
	{
		path: 'admin/statut',
		loadChildren: './statut/statut.module#StatutModule',
		canActivate: [OnlyAdminGuard] 
	},
	{
		path: 'admin/utilisateurs',
		loadChildren: './utilisateurs/utilisateurs.module#UtilisateursModule',
		canActivate: [OnlyAdminGuard] 
	},
	{
		path: 'login',
		loadChildren: './login/login.module#LoginModule',
		canActivate: [LoggedGuard] 
	},
	{
		path: 'unauthorized',
		loadChildren: './unauthorized/unauthorized.module#UnauthorizedModule',
		canActivate: [AuthGuard] 
	},
	{
		path: '',
		redirectTo: 'planning',
		pathMatch: 'full'
	},
	// otherwise redirect to planning
    { path: '**', redirectTo: 'planning' }
]

@NgModule({
	imports: [RouterModule.forRoot(routes)],
  	exports: [RouterModule]
})
export class AppRoutingModule {}