import { Deserializable } from "./deserializable";

/*
 * CLASS ACTIVITYLOG
 */

export class ActivityLog implements Deserializable {
    id:             number;
    log_name:       string; // currentUser name
    description:    string; // description de l'objet modifié
    subject_id:     number; // id de l'objet modifié
    subject_type:   string; // action (update)
    causer_id:      number; // currentUser id 
    causer_type:    string; // nature de l'objet
    properties:     string; // date de modification

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}
