import { Deserializable } from "./deserializable";
/*
 * CLASS ACTIVITYLOG
 */

export class ActivityLog implements Deserializable{
    id:             number;
    log_name:       string; // currentUser name
    description:    string; // description de l'objet modifié
    subject_id:     number; // id de l'objet modifié
    subject_type:   string; // action (update)
    causer_id:      number; // currentUser id 
    causer_type:    string; // nature de l'objet
    properties:     string; // date de modification

    date:           string;
    utilisateur:    string;
    detail:         string;

    deserialize(input: any) {
        var self: any = this;
        for (let prop in input) {
                self[prop] = input[prop];
        }
        self.date == input.properties;
        self.utilisateur == input.utilisateur;
        self.detail == input.causer_type +' ('+input.description+') => '+input.subject_type;
        console.log('self='+self);
        return self;
    }

}
