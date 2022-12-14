import { pedidos } from "../database/db.js";


export async function deletapedidos(req, res) {
    let pedido = req.headers.pedido;
    
    console.log(pedido)
    try {
        let mensage = await pedidos.findOne({ pedido });
      
        if (!mensage) {
            res.status(404).send(req.body)
            return
        }
        await pedidos.deleteOne({ pedido });
        res.send("pedido apagada com sucesso!");
    } catch (err) {
        console.log(err);
        res.sendStatus(404);
    }

}
