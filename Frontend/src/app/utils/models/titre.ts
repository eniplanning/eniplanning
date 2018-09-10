import { Deserializable } from "./deserializable";

export class Titre implements Deserializable{
    CodeTitre:          string
    LibelleLong:        string
    LibelleCourt:       string
    TitreENI:           number
    Archiver:           number
    Niveau:             string
    DateArrete:         Date
    DateJO:             Date
    CodeAFPA:           string
    Millesime:          number


    constructor(){
    }
    
    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
