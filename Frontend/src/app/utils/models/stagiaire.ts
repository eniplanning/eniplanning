/*
 * CLASS STAGIAIRE
 */
import { Planning } from './planning';

export class Stagiaire {
    codeStagiaire:      number;
    civilite:           string;
    nom:                string;
    prenom:             string;
    adresse:			string;
    codePostal:			number;
    ville:				string;
    email:				string;
    dateNaissance:		Date;
    listPlannings:      Planning[];

    constructor() {
    }

}