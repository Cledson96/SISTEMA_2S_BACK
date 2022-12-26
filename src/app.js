import express from "express";
import cors from "cors";
import cadastro from "./routes/cadastro.route.js";
import cadastro_motoboy from "./routes/cadastro_motoboy.route.js";
import cadastro_cliente from "./routes/cadastro_cliente.route.js";
import getcadastro_motoboy from "./routes/getcadastro_motoboy.route.js";
import getcadastro_cliente from "./routes/getcadastro_cliente.route.js";
import postcadastro_pedidos from "./routes/postcadastro_pedidos.route.js";
import pedidos from "./routes/pedidos.route.js";
import ausente from "./routes/ausente.route.js";
import deletepedidos from "./routes/deletepedidos.route.js";
import login from "./routes/login.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(login);
app.use(cadastro);
app.use(cadastro_motoboy);
app.use(cadastro_cliente);
app.use(getcadastro_motoboy);
app.use(getcadastro_cliente);
app.use(postcadastro_pedidos);
app.use(pedidos);
app.use(deletepedidos);
app.use(ausente);



const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
});