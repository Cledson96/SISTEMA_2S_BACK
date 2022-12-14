import { pedidos } from "../database/db.js";

export async function pedidoss(req, res) {

    const registros = await pedidos.find({}).toArray();

    try {
        res.status(200).send(registros);
    } catch (err) {
        res.status(500).send(err);
    }

}