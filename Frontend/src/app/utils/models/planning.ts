/*
 * CLASS PLANNING
 */
// Model de l'objet : Planning

export class Planning {
    id: number;
    label: string;
    date_start_contract: Date;
    date_end_contract: Date;
    date_start_formation: Date;
    date_end_formation: Date;
    date_inscription: Date;
    nb_weeks_formation: number;
    nb_weeks_enterprise: number;
    limit_day_formation: number;
    num_version: number;
    status: number
    is_archived: boolean;
    is_model: boolean
    planning_id: number;
    codeStagiaire: number;
    codeFormation: number;
    user_id: number;

    constructor() { }

    setLabel(label: string)
    {
        this.label = label;
    }

}
