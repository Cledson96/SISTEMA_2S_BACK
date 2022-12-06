import { Router } from "express";
import { getcadastro_motoboy } from "../controllers/getcadastro_motoboy.controller.js";


const router = Router()

router.get('/cadastro_motoboy',getcadastro_motoboy )


export default router