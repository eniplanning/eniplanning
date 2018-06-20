// Model de l'objet : Planning


export class Planning {
    planning_id: number;
    label: string;
    status_selected: boolean;

    constructor() {
        this.status_selected = false;
    }

}