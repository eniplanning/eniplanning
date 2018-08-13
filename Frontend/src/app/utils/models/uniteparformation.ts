import { Module } from './module';
/*
 * CLASS UNITEPARFORMATION
 */
// Model de l'objet : UniteParFormation

export class UniteParFormation {
    id:                 number
    codeFormation:      string
    position:           number
    idUniteformation:   number
    modules:            Module[]

    constructor(){
    }
}