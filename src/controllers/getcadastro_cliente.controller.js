import { clientes } from "../database/db.js";

export async function getcadastro_cliente(req, res) {

    const registros = await clientes.find({}).toArray();

    try {
        res.status(200).send(registros);
    } catch (err) {
        res.status(500).send(err);
    }

}