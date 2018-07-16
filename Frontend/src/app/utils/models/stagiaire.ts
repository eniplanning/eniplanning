/*
 * CLASS STAGIAIRE
 */
import { Planning } from './planning';

export class Stagiaire {
    codeStagiaire:      number;
    civilite:           string;
    nom:                string;
    prenom:             string;
    listPlannings:      Planning[];
   
    constructor() {
    }

}