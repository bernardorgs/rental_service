import z from "zod/v4";

const userStatus = z.enum(['Admin', 'User']);

export const userRequestSchema = z.object({
    role: userStatus,
    name: z.string(),
    email: z.email(),
    password: z.string(),
});

export const userResponseSchema = z.object({
    role: userStatus,
    name: z.string(),
    email: z.email(),
});