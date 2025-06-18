import { NotFoundError } from "../../shared/errors/errors";
import { EquipmentListResponseDTO, EquipmentRequestDTO, EquipmentResponseDTO } from "./data/dtos";
import { EquipmentMapper } from "./data/mapper";
import { IEquipmentRepository } from "./repo";

export class EquipmentService {
    constructor(
        private repository: IEquipmentRepository,
        private mapper: EquipmentMapper
    ) { }

    async createEquipment(dto: EquipmentRequestDTO): Promise<EquipmentResponseDTO> {
        const equipment = await this.repository.save(
            this.mapper.toDomain(dto)
        );

        return this.mapper.toResponse(equipment);
    }

    async findEquipmentById(equipmentId: string): Promise<EquipmentResponseDTO> {
        const equipment = await this.repository.findById(equipmentId);

        if (!equipment) {
            throw new NotFoundError('Equipment not found.');
        }

        return this.mapper.toResponse(equipment);
    }

    async findAvailableEquipments(): Promise<EquipmentListResponseDTO[]> {
        const availableEquipments = await this.repository.findAvailableEquipments();
        return this.mapper.toList(availableEquipments);
    }

    async findAllEquipments(): Promise<EquipmentListResponseDTO[]> {
        const equipments = await this.repository.findAll();
        return this.mapper.toList(equipments);
    }
}