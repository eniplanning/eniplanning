import { Cours } from './cours';
/*
 * CLASS MODULE
 */
// Model de l'objet : Module

export class Module {
    IdModule:           number
    Libelle:			string
    DureeEnHeures:		number
    DureeEnSemaines:	number
    PrixPublicEnCours:	number
    LibelleCourt:		string
    Archiver:			boolean
    TypeModule:			number
    cours:              Cours[]

    constructor(){
    }
}