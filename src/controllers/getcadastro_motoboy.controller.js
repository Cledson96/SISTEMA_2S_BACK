import { motoboys } from "../database/db.js";

export async function getcadastro_motoboy(req, res) {

    const registros = await motoboys.find({}).toArray();

    try {
        res.status(200).send(registros);
    } catch (err) {
        res.status(500).send(err);
    }

}