import { EquipmentMapper } from "../../../business/equipment/data/mapper";
import { EquipmentService } from "../../../business/equipment/service";
import { PrismaEquipmentRepository } from "../../../infra/prisma/impl/prisma-equipment";

const mapper = new EquipmentMapper();
const repository = new PrismaEquipmentRepository();

export const equipmentService = new EquipmentService(repository, mapper)