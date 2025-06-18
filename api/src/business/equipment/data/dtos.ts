import { EquipmentStatus } from "../domain";

export interface EquipmentRequestDTO {
    name: string;
    image: string;
    description: string;
    stockAmount: number;
}

export interface EquipmentResponseDTO {
    id: string;
    name: string;
    image: string;
    description: string;
    stockAmount: number;

    status: EquipmentStatus;
}

export interface EquipmentListResponseDTO {
    id: string;
    name: string;
    image: string;
}