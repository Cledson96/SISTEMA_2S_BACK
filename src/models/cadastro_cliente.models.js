import joi from "joi";

export const cadastro_clienteSchema = joi.object({
    name: joi.string().required().min(2).max(50),
    celular: joi.number().required().min(8),
    telefone: joi.number().required().min(8),
    email: joi.string().min(3).required().email()
      
});

