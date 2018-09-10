import { Planning } from './planning';
import { Entreprise } from './entreprise';

export class Stagiaire {
    CodeStagiaire:      number
    Civilite:           string
    Nom:                string
    Prenom:             string
    Adresse:			string
    CodePostal:			number
    Ville:				string
    Email:				string
    DateNaissance:		Date
    Entreprise:         Entreprise
    ListPlannings:      Planning[]

    constructor() {
    }

    getCodeStagiaire()
    {
        return this.CodeStagiaire;
    }

}
