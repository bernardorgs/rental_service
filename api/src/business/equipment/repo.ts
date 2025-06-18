import { IRepository } from "../../shared/repo/base-repo";
import { Equipment } from "./domain";

export interface IEquipmentRepository extends IRepository<Equipment, string> {
    findAvailableEquipments(): Promise<Equipment[]>;
}