/*
 * CLASS PLANNING
 */
// Model de l'objet : Planning

import { CoursPlanning } from './cours-planning';

export class Planning {
    id:                    number
    label:                 string
    ctr_disponibilities:   any[]
    ctr_exemptions:        any[]
    ctr_prioritizations:   any[]
    planning_courses:      any[]
    date_start_contract:   Date
    date_end_contract:     Date
    date_start_formation:  Date
    date_end_formation:    Date
    date_inscription:      Date
    nb_weeks_formation:    number
    nb_weeks_enterprise:   number
    limit_day_formation:   number
    num_version:           number
    status:                number
    is_archived:           boolean
    is_model:              boolean
    planning_id:           number
    stagiaire_id:          number
    formation_id:          string
    user_id:               number

    constructor() { }

    setLabel(label: string)
    {
        this.label = label;
    }

}
