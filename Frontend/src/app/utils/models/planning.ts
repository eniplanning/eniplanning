// Model de l'objet : Planning

export class Planning {

    label: string;
    date_start_contract: Date;
    date_end_contract: Date;
    date_start_formation: Date;
    // 'date_end_formation',
    // 'date_subscription',
    // 'nb_weeks_formation',
    // 'nb_weeks_enterprise',
    // 'limit_day_formation',
    // 'num_version',
    // 'status',
    // 'is_archived',
    // 'is_model',
    planning_id: number;
    // 'stagiaire_id',
    // 'formation_id',
    // 'user_id',
    status_selected: boolean;

    constructor() {
        this.status_selected = false;
    }

    setLabel(label: string)
    {
        this.label = label;
    }

}
