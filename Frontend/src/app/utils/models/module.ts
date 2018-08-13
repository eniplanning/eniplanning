import { Cours } from './cours';
/*
 * CLASS MODULE
 */
// Model de l'objet : Module

export class Module {
    idModule:           number
    libelle:			string
    dureeEnHeures:		number
    dureeEnSemaines:	number
    prixPublicEnCours:	number
    libelleCourt:		string
    archiver:			boolean
    typeModule:			number
    cours:              Cours[]

    constructor(){
    }
}