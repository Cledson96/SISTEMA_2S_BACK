import joi from "joi";

export const cadastro_motoboySchema = joi.object({
    name: joi.string().required().min(2).max(50),
    celular_principal: joi.number().required().min(8),
    telefone_recado: joi.number().required().min(8),
    email: joi.string().min(3).required().email(),
    endereco: joi.string().required().min(10),
    cnpj: joi.number().min(10),
    cpf: joi.number().min(11).required()
   
});

