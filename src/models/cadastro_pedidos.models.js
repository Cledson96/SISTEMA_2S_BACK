import joi from "joi";

export const cadastro_pedidosSchema = joi.object({
    pedido: joi.string().required().min(2).max(50),
    motoboy: joi.string().required(),
    login: joi.string().required().min(3),
    data: joi.string().min(3).required(),
    cliente: joi.string().required(),
    name:joi.string(),
    img:joi.string(),
    qtd:joi.any(),
    horas: joi.string(),
    ausente:joi.number(),
  

   
});

