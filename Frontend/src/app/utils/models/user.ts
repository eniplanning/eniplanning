/*
 * CLASS UTILISATEUR
 */

export class User {
    id:         number;
    email:      string;
    password:   string;
    name:       string;
    firstname:  string;
    is_active:  boolean;
    role_id:    number;
    username:   string;
   
    constructor(data) {
        this.id = data.id;
        this.email = data.email;
        this.name = data.name;
        this.firstname = data.firstname;
        this.is_active = data.is_active;
        this.role_id = data.role_id;
        this.username = data.firstname + ' ' +data.name;
    }


}