import { z } from "zod/v4";

const rentalStatus = z.enum(['Active', 'Finished']);

const equipmentSchema = z.object({
    id: z.string(),
    name: z.string()
})

export const rentalRequestSchema = z.object({
    amount: z.number().int().min(1),
    rentalDate: z.date(),
    returnDate: z.date(),
    // relation
    userId: z.string(),
    equipmentId: z.string()
})

export const rentalResponseSchema = z.object({
    id: z.string(),

    amount: z.number().int().min(1),
    status: rentalStatus,
    rentalDate: z.date(),
    returnDate: z.date(),
    // relation
    userId: z.string(),
    equipment: equipmentSchema
})

export const rentalListResponseSchema = z.array(
    z.object({
        id: z.string(),
        status: rentalStatus,
        rentalDate: z.date(),
        returnDate: z.date(),
        // relation
        userId: z.string(),
        equipment: equipmentSchema
    })
)


