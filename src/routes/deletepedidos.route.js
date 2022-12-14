import { Router } from "express";
import { deletapedidos } from "../controllers/deletapedidos.controller.js";


const router = Router();

router.delete("/deletapedidos", deletapedidos);

export default router;


