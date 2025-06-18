import { Equipment } from "../../../business/equipment/domain";
import { IEquipmentRepository } from "../../../business/equipment/repo";
import { prisma } from "../init";
import { PrismaEquipmentMapper as mapper } from "../mappers/prisma-equipment-mapper";

export class PrismaEquipmentRepository implements IEquipmentRepository {

    async findAvailableEquipments(): Promise<Equipment[]> {
        const raws = await prisma.equipment.findMany({
            where: {
                status: 'Available'
            }
        })

        return mapper.toList(raws)
    }

    async save(data: Equipment): Promise<Equipment> {
        return mapper.toDomain(
            await prisma.equipment.create({ data: mapper.toPrisma(data) })
        )
    }

    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

    update(id: string, data: Partial<Equipment>): Promise<void> {
        throw new Error("Method not implemented.");
    }

    async findById(id: string): Promise<Equipment | null> {
        const equipment = await prisma.equipment.findUnique({
            where: {
                id: id
            }
        })

        if (!equipment) return null;
        return mapper.toDomain(equipment);
    }

    async findAll(): Promise<Equipment[]> {
        const equipments = await prisma.equipment.findMany();
        return mapper.toList(equipments);
    }
}