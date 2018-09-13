import { Deserializable } from "./deserializable";

export class ComplementaryCours implements Deserializable{
    id:                      number;
    date_start:              Date;
    date_end:                Date;
    real_time_hour:          number;
    expected_time_hour:      number;
    date_to_be_defined:      boolean;
    complementary_module_id: number;



    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}