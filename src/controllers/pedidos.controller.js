import { pedidos } from "../database/db.js";

export async function pedidoss(req, res) {
    const filtro = req.headers.body;
   
    let registros

    if (filtro && filtro.length > 1) {
       
        registros = await pedidos.find({ pedido: {'$regex' : `${filtro}`, '$options' : 'i'}}).toArray();
        try {
            res.status(200).send(registros);
        } catch (err) {
            res.status(500).send(err);
        }


    } else {
      
        registros = await pedidos.find({}).toArray();
        try {
          
            res.status(200).send(registros);
        } catch (err) {
            res.status(500).send(err);
        }
    }



}