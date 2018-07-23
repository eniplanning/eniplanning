/*
 * CLASS PLANNING
 */
// Model de l'objet : Planning

export class Planning {

    label: string;
    date_start_contract: Date;
    date_end_contract: Date;
    date_start_formation: Date;
    date_end_formation: Date;
    date_subscription: Date;
    nb_weeks_formation: number;
    nb_weeks_enterprise: number;
    limit_day_formation: number;
    num_version: number;
    status: number
    is_archived: boolean;
    is_model: boolean
    planning_id: number;
    stagiaire_id: number;
    formation_id: number;
    user_id: number
    status_selected: boolean;


    constructor() {
        this.status_selected = false;
    }
<<<<<<< HEAD
}
=======

    setLabel(label: string)
    {
        this.label = label;
    }

}
>>>>>>> 44f823aef34ab5dc34e2558d5e670f6368c8de82
