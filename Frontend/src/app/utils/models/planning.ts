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
    planning_courses:      CoursPlanning[]
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
    code_lieu:             number

    constructor(){}

    setLabel(label: string)
    {
        this.label = label;
    }

    setId(id: number)
    {
        this.id = id;
    }

    setDate_start_contract(date_start_contract: Date)
    {
        this.date_start_contract = date_start_contract;
    }

    setDate_end_contract(date_end_contract: Date)
    {
        this.date_end_contract = date_end_contract;
    }

    setDate_start_formation(date_start_formation: Date)
    {
        this.date_start_formation = date_start_formation;
    }

    setDate_end_formation(date_end_formation: Date)
    {
        this.date_end_formation = date_end_formation;
    }

    setDate_inscription(date_inscription: Date)
    {
        this.date_inscription = date_inscription;
    }

    setNb_weeks_formation(nb_weeks_formation: number
    ){
        this.nb_weeks_formation = nb_weeks_formation;
    }

    setNb_weeks_enterprise(nb_weeks_enterprise: number
    ){
        this.nb_weeks_enterprise = nb_weeks_enterprise;
    }

    setLimit_day_formation(limit_day_formation: number
    ){
        this.limit_day_formation = limit_day_formation;
    }

    setNum_version(num_version: number
    ){
        this.num_version = num_version;
    }

    setStatus(status: number
    ){
        this.status = status;
    }

    setIs_archived(is_archived: boolean)
    {
        this.is_archived = is_archived;
    }

    setIs_model(is_model: boolean)
    {
        this.is_model = is_model;
    }

    setPlanning_id(planning_id: number)
    {
        this.planning_id = planning_id;
    }

    setStagiaire_id(stagiaire_id: number)
    {
        this.stagiaire_id = stagiaire_id;
    }

    setFormation_id(formation_id: string)
    {
        this.formation_id = formation_id;
    }

    setUser_id(user_id: number)
    {
        this.user_id = user_id;
    }

    setLieu(code_lieu: number) {
        this.code_lieu = code_lieu;
    }


}
