
/*
 * CLASS Contraintes disponibilité
 */
// Model de l'objet : ctrDisponibility

export class CtrDisponibility {

    date_start:     any;
    date_end:       any;
    is_available:   boolean;
    planning_id:    number;
    id:  number;

    constructor() {}

    setDate_start(date_start)
    {
        this.date_start = date_start;
    }

    setDate_end(date_end)
    {
        this.date_end = date_end;
    }

    setIs_available(is_available)
    {
        this.is_available = is_available;
    }

    setPlanning_id(planning_id)
    {
        this.planning_id = planning_id;
    }

    setId_constraint(id_constraint: number)
    {
        this.id = id_constraint;
    }

}
