import { FastifyZodInstance } from "../../../shared/@instances/instance";
import { rentalRequestSchema } from "./schemas";

export const RentalRoutes = (app: FastifyZodInstance) => {
    app.post('/rent', {
        schema: {
            description: 'Rent equipment',
            tags: ['rent'],
            body: rentalRequestSchema
        }
    }, () => { })
}