import { pedidos } from "../database/db.js";

export async function pedidoss(req, res) {
    
    let registros
   
    if (req.headers.chave == "pedido" && req.headers.filtro) {
       console.log("entrei")
       console.log(req.headers.filtro)
        registros = await pedidos.find({ pedido: {'$regex' : `${req.headers.filtro}`, '$options' : 'i'}}).toArray();
        try {
            res.status(200).send(registros);
        } catch (err) {
            res.status(500).send(err);
        }


    } else if (req.headers.chave == "motoboy" && req.headers.filtro) {
        registros = await pedidos.find({ motoboy: {'$regex' : `${req.headers.filtro}`, '$options' : 'i'}}).toArray();
        try {
            res.status(200).send(registros);
        } catch (err) {
            res.status(500).send(err);
        }
    } 
    else{
      
        registros = await pedidos.find({}).toArray();
        try {
          
            res.status(200).send(registros);
        } catch (err) {
            res.status(500).send(err);
        }
    }



}