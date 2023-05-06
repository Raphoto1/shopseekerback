import { Router } from "express";
import { addDesignCapture, getAllDesigns } from "../Controller/designs.controller.js";

const designsRouter = Router();

//rutas designs
designsRouter.get("/", getAllDesigns);
designsRouter.post("/", addDesignCapture);

export {designsRouter};
