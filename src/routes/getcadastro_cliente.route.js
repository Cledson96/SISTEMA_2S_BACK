import { Router } from "express";
import { getcadastro_cliente } from "../controllers/getcadastro_cliente.controller.js";


const router = Router()

router.get('/cadastro_cliente',getcadastro_cliente )


export default router