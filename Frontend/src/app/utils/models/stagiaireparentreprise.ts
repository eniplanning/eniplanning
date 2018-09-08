import { Deserializable } from "./deserializable";

export class StagiaireParEntreprise implements Deserializable{
    CodeStagiaire:         string;
    CodeEntreprise:        string;
    DateLien:              string;
    CodeTypeLien:          string;
    DateDebutEnEts:        string;
    DateFinEnEts:          string;
    CodeFonction:          string;
    Commentaire:           string;
    NumLien:               string;
    CodeTuteur:            string;
    ResponsableEts:        string;
    GererPar:              string;
    Interruption:          string;
    SujetStage:            string;
    TitreVise:             string;
    CodeContactEni:        string;


    constructor(){
    }
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
