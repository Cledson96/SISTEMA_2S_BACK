import { cadastro_clienteSchema } from "../models/cadastro_cliente.models.js";
import { clientes } from "../database/db.js"

export async function cadastro_cliente(req, res) {

    const { name,celular,telefone, email } = req.body;

    const validation = cadastro_clienteSchema.validate(req.body, { abortEarly: false });
    if (validation.error) {
        res.status(422).send(validation.error.message);
        return
    }
    
    
    const cliente = await clientes.find({}).toArray();

    const verificador = cliente.find(verifica => verifica.email === req.body.email)
    
    if (verificador) {
        res.status(409).send("Já existe um cliente com este email!")
        return
    }
    
    try {
       const resp = await clientes.insertOne({ name, email, celular,telefone});
        res.status(201).send("cliente cadastrado com sucesso!");
    } catch (err) {
        res.status(500).send(err);
    }

}