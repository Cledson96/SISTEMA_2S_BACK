import { Router } from "express";
import {cadastro_motoboy} from "../controllers/cadastro_motoboy.controller.js";

  const router = Router();

  router.post("/cadastro_motoboy", cadastro_motoboy);

  export default router;