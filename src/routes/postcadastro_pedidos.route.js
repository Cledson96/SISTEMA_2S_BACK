import { Router } from "express";
import {postcadastro_pedidos} from "../controllers/postcadastro_pedidos.controller.js";

  const router = Router();

  router.post("/entrada_pedidos", postcadastro_pedidos);

  export default router;