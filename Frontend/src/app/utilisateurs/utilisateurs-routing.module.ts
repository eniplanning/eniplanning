import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UtilisateursComponent } from './utilisateurs.component';
import { UtilisateurFormComponent } from './utilisateur-form/utilisateur-form.component';

const routes: Routes = [
	{
		path: '',
		component: UtilisateursComponent
	},
	{
		path: 'create',
		component: UtilisateurFormComponent
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UtilisateursRoutingModule { }	
