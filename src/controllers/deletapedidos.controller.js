import { pedidos } from "../database/db.js";
import { ObjectId } from "mongodb";


export async function deletapedidos(req, res) {
    let pedido = req.body.pedido


    let vaii = pedido.map((ref)=>{return {_id: new ObjectId(ref.id)}})
    console.log(vaii)
  
    for (let i = 0; i < pedido.length; i++) {
        console.log(vaii[i])
               
        let achou = await pedidos.deleteOne(vaii[i]);
        console.log(achou)
            
        try {
           
            
        }
        catch (err) {
            console.log(err);
            res.sendStatus(404);
        }
    }



}
