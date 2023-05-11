import {Router} from "express";
import { renderIndex } from "../Controller/web.controller.js";

const router = Router();

router.get("/", renderIndex);

router.get("/designs");

router.get("/designs/:pid");

router.get("/cart/:cid");

//rutas vistas autenticacion

export {router as webRouter}