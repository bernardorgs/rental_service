import { fastifyCors } from "@fastify/cors";
import { fastify } from "fastify";
import { fastifySwagger } from "@fastify/swagger";
import { fastifySwaggerUi } from "@fastify/swagger-ui";
import {
    jsonSchemaTransform, serializerCompiler, validatorCompiler, ZodTypeProvider
} from "fastify-type-provider-zod";
import { Router } from "./http/routes/router";

const app = fastify().withTypeProvider<
    ZodTypeProvider
>();

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.register(fastifyCors, { origin: '*' });

app.register(fastifySwagger, {
    openapi: {
        info: {
            title: "Rental Service",
            version: '1.0.0'
        }
    },
    transform: jsonSchemaTransform
})

app.register(fastifySwaggerUi, {
    'routePrefix': '/docs'
})

app.register(Router, { prefix: '/api/v1' })

app.listen({ port: 3333 }).then(() => {
    console.log('Http server running.')
});