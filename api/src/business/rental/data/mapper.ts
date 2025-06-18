import { Rental } from "../domain";
import { RentalRequestDTO, RentalResponseDTO } from "./dtos";

export class RentalMapper {
    toDomain(dto: RentalRequestDTO): Rental {
        return new Rental(dto);
    }

    toResponse(domain: Rental, equipmentName: string): RentalResponseDTO {
        return {
            id: domain.id,
            amount: domain.amount,
            status: domain.status,
            rentalDate: domain.rentalDate,
            returnDate: domain.returnDate,

            userId: domain.userId,
            equipment: {
                id: domain.equipmentId,
                name: equipmentName
            }
        }
    }
}