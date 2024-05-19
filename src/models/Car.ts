import { Model, ModelObject } from "objection";

export class CarModel extends Model {
    static get tableName() {
        return "cars"
    }
}

export type Car = ModelObject<CarModel>
