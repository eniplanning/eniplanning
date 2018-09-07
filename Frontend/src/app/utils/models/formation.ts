import { Module } from './module';
import { UniteParFormation } from './uniteparformation';
import { Titre } from './titre';

export class Formation {
    CodeFormation:      string
    LibelleLong:        string
    LibelleCourt:       string
    DureeEnHeures:      number
    TauxHoraire:        number
    CodeTitre:          string
    HeuresCentre:       number
    HeuresStage:        number
    SemainesCentre:     number
    SemainesStage:      number
    DureeEnSemaines:    number
    Archiver:           boolean
    ECFaPasser:         boolean
    TypeFormation:      number
    CodeLieu:           number
    uniteparformation:  UniteParFormation[]
    Modules:            Module[]
    Titre:              Titre[]

    constructor(){
    }
}
