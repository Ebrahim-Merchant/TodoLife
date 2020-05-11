import { Observable } from "rxjs";

export interface IColor {
    getRandomColor(): string;
    getColor(): Observable<Array<any>>;
}
