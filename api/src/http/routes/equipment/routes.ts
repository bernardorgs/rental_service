import { equipmentListResponseSchema, equipmentRequestSchema, equipmentResponseSchema } from "./schemas";
import { equipmentService } from ".";
import { FastifyZodInstance } from "../../../shared/@instances/instance";

export const EquipmentRoutes = (app: FastifyZodInstance) => {
    app.post('/create', {
        schema: {
            description: 'Create equipment',
            tags: ['equipment'],
            body: equipmentRequestSchema,
            response: {
                201: equipmentResponseSchema.describe('create new equipment')
            }
        }
    }, async (request, reply) => {
        const result = await equipmentService.createEquipment(request.body);
        return reply.status(201).send(result);
    })

    app.get('/:id', {
        schema: {
            description: 'Get equipment by id',
            tags: ['equipment'],
            response: {
                200: equipmentResponseSchema.describe('find equipment')
            }
        }
    }, async (request, reply) => {
        const { id } = request.params as { id: string };
        const result = await equipmentService.findEquipmentById(id);
        return reply.status(200).send(result);
    })

    app.get('/', {
        schema: {
            description: 'Get all equipments',
            tags: ['equipment'],
            response: {
                200: equipmentListResponseSchema
            }
        }
    }, async (request, reply) => {
        const result = await equipmentService.findAllEquipments();
        return reply.status(200).send(result);
    })

    app.get('/available', {
        schema: {
            description: 'Get all available equipments',
            tags: ['equipment'],
            response: {
                200: equipmentListResponseSchema.describe('find available equipments')
            }
        }
    }, async (request, reply) => {
        const result = await equipmentService.findAvailableEquipments();
        return reply.status(200).send(result);
    })
}