import {Router} from "express";
import { renderDesigns, renderIndex, renderLogin, renderProfile, renderSignin } from "../Controller/web.controller.js";

const router = Router();

router.get("/", renderIndex);
router.get("/signin", renderSignin);
router.get("/login", renderLogin);
router.get("/profile", renderProfile);
router.get("/designs", renderDesigns);

router.get("/designs/:pid");

router.get("/cart/:cid");

//rutas vistas autenticacion

export {router as webRouter}