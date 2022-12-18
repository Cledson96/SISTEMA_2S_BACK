import { Router } from "express";
import {ausente} from "../controllers/ausente.controller.js";

  const router = Router();

  router.put("/ausente", ausente);

  export default router;