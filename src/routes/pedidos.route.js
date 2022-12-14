import { Router } from "express";
import {pedidoss} from "../controllers/pedidos.controller.js";

  const router = Router();

  router.get("/pedidos", pedidoss);

  export default router;