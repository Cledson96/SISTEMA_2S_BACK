import { cadastro_pedidosSchema } from "../models/cadastro_pedidos.models.js";
import { pedidos } from "../database/db.js"

export async function postcadastro_pedidos(req, res) {
    const { pedido,motoboy,login, data, cliente,name,img,qtd,ausente} = req.body;
    let qtds
   

    const validation = cadastro_pedidosSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    
    if (qtd == "not"){
        qtds = 1
    } else{
        qtds = qtd
    }
    const tdspedidos = await pedidos.find({motoboy : motoboy}).toArray();

    const verificador = tdspedidos.find(verifica => verifica.pedido === pedido)
    

    if (verificador) {
        res.status(409).send("Este pedido ja foi cadastrado ao usuario!!!")
        return
    }
   
    try {
       const resp = await pedidos.insertOne({ pedido, motoboy, login,data,cliente ,name,status:"ok",img,qtd:qtds,ausente});
        res.status(201).send("pedido cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

}
