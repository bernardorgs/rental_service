import { FastifyInstance } from "fastify";
import { EquipmentRoutes } from "./equipment/routes";

export const Router = (app: FastifyInstance) => {
    app.register(EquipmentRoutes, {
        prefix: '/equipments'
    })
}