import { z } from "zod/v4";

const equipmentStatus = z.enum(['Available', 'Unavailable'])

export const equipmentRequestSchema = z.object({
    name: z.string(),
    image: z.string(),
    description: z.string(),
    stockAmount: z.number().int().min(0).default(1),
})

export const equipmentResponseSchema = z.object({
    id: z.string(),
    name: z.string(),
    image: z.string(),
    description: z.string(),
    stockAmount: z.number().default(1),
    status: equipmentStatus
})

export const equipmentListResponseSchema = z.array(
    z.object({
        id: z.string(),
        name: z.string(),
        image: z.string()
    })
)