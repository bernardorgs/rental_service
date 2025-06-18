import { IRepository } from "../../shared/repo/base-repo";
import { Rental } from "./domain";

export interface IRentalRepository extends IRepository<Rental, string> {
    findOverdueRentals(currentDate: Date): Promise<Rental[]>;
    findUserRentals(userId: string): Promise<Rental[]>;
}