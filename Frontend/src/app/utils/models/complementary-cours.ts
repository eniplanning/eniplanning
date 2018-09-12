import { Deserializable } from "./deserializable";

export class ComplementaryCours implements Deserializable{
    id:                      number;
    date_start:              Date;
    date_end:                Date;
    real_time_hour:          number;
    expected_time_hour:      number;
    date_to_be_defined:      boolean;
    complementary_module_id: number;


    constructor(start:Date, end:Date, expected_hour:number, to_do: boolean, id_module: number) {
        this.date_start = start;
        this.date_end = end;
        this.expected_time_hour = expected_hour;
        if (to_do = true) {
            this.real_time_hour = 7;
        } else {
            this.real_time_hour = this.expected_time_hour
        }
        this.date_to_be_defined = to_do;
        this.complementary_module_id = id_module;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}