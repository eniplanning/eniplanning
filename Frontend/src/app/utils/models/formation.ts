/*
 * CLASS FORMATION
 */
// Model de l'objet : Formation

export class Formation {
    codeFormation:      string
    libelleLong:        string
    libelleCourt:       string
    dureeEnHeures:      number
    tauxHoraire:        number
    codeTitre:          string
    heuresCentre:       number
    heuresStage:        number
    semainesCentre:     number
    semainesStage:      number
    dureeEnSemaines:    number
    archiver:           boolean
    eCFaPasser:         boolean
    typeFormation:      number
    codeLieu:           number
    uniteparformation:  any[]
    modules:            any[]

    constructor(){
    }
}
