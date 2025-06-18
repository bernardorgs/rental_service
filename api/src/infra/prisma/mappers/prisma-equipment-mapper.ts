import { Equipment as Raw } from "@prisma/client";
import { Equipment } from "../../../business/equipment/domain";

export class PrismaEquipmentMapper {
    static toPrisma(equipment: Equipment): Raw {
        return {
            id: equipment.id,
            name: equipment.name,
            image: equipment.image,
            description: equipment.description,
            stock_amount: equipment.stockAmount,

            status: equipment.status,
        }
    }

    static toDomain(raw: Raw): Equipment {
        return new Equipment({
            id: raw.id,
            name: raw.name,
            image: raw.image,
            description: raw.description,
            stockAmount: raw.stock_amount
        });
    }

    static toList(raws: Raw[]): Equipment[] {
        return raws.map(this.toDomain);
    }
}