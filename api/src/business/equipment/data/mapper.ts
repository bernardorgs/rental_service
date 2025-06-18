import { Equipment } from "../domain";
import { EquipmentListResponseDTO, EquipmentRequestDTO, EquipmentResponseDTO } from "./dtos";

export class EquipmentMapper {
    toDomain(dto: EquipmentRequestDTO): Equipment {
        return new Equipment(dto);
    }

    toResponse(domain: Equipment): EquipmentResponseDTO {
        return {
            id: domain.id,
            name: domain.name,
            image: domain.image,
            description: domain.description,
            stockAmount: domain.stockAmount,

            status: domain.status,
        }
    }

    toList(equipments: Equipment[]): EquipmentListResponseDTO[] {
        return equipments.map(({ id, name, image }) => ({ id, name, image }))
    }
}