import { Router } from "express";
import {cadastro_cliente} from "../controllers/cadastro_cliente.controller.js";

  const router = Router();

  router.post("/cadastro_cliente", cadastro_cliente);

  export default router;