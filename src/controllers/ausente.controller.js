import { pedidos } from "../database/db.js";
import { ObjectId } from "mongodb";


export async function ausente(req, res) {
    let id = req.body.pedido;

    let mensage = await pedidos.findOne({ _id: new ObjectId(id) });

    if (!mensage) {
        res.status(404).send(req.body)
        return
    }


    console.log(id)
    try {

        await pedidos.updateOne({ _id: new ObjectId(id) }, { $set: { "status":"ausente" } });
        res.send("ausente cadastrado com sucesso!");
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

}
