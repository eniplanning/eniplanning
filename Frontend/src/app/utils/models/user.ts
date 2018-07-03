import { Deserializable } from "./deserializable";

/*
 * CLASS UTILISATEUR
 */

export class User implements Deserializable {
    id:         number;
    email:      string;
    password:   string;
    name:       string;
    firstname:  string;
    is_active:  boolean;
    role_id:    number;
    username:   string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}