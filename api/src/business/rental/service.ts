import { NotFoundError } from "../../shared/errors/errors";
import { IEquipmentRepository } from "../equipment/repo";
import { IRentalRepository } from "./repo";
import { RentalMapper } from "./data/mapper";
import { RentalRequestDTO, RentalResponseDTO } from "./data/dtos";

export class RentalService {
    constructor(
        private equipmentRepository: IEquipmentRepository,
        private rentalRepository: IRentalRepository,
        private mapper: RentalMapper,
    ) { }

    async rent(dto: RentalRequestDTO): Promise<RentalResponseDTO> {

        const equipment = await this.equipmentRepository.findById(dto.equipmentId);

        if (!equipment) {
            throw new NotFoundError('Equipment not found')
        }

        equipment.decreaseAmount(dto.amount);
        await this.equipmentRepository.update(equipment.id, { stockAmount: equipment.stockAmount })

        const rental = await this.rentalRepository.save(
            this.mapper.toDomain(dto)
        );

        return this.mapper.toResponse(rental, equipment.name)
    }

    async finishOverdueRentals(currentDate: Date = new Date()): Promise<void> {
        const rentals = await this.rentalRepository.findOverdueRentals(currentDate);

        for (const rental of rentals) {
            rental.finishRental();
            await this.rentalRepository.update(rental.id, { status: rental.status });

            const equipment = await this.equipmentRepository.findById(
                rental.equipmentId
            )
            equipment!.increaseAmount(rental.amount);

            await this.equipmentRepository.update(rental.equipmentId, {
                stockAmount: equipment!.stockAmount
            })
        }
    }
}