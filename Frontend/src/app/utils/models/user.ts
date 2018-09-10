import { Deserializable } from "./deserializable";

/*
 * CLASS UTILISATEUR
 */

export class User implements Deserializable {
    id:         number;
    email:      string;
    password:   string;
    password_confirmation: string;
    name:       string;
    firstname:  string;
    is_active:  number;
    role_id:    number;
    username:   string;

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}