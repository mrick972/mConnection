import { Rating } from "./rating";

export interface Evaluation {
    id: number;
    idPerson: number;
    comment: string;
    rating: Rating;
    date: Date;
}
