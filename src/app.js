import express from "express";
import cors from "cors";
import cadastro from "./routes/cadastro.route.js";
import cadastro_motoboy from "./routes/cadastro_motoboy.route.js";
import getcadastro_motoboy from "./routes/getcadastro_motoboy.route.js";
import login from "./routes/login.route.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(login);
app.use(cadastro);
app.use(cadastro_motoboy);
app.use(getcadastro_motoboy);


const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
});