import { Router } from "express";
import { addDesignCapture, deleteDesignCapture, getAllDesigns, getDesignByIdCapture, updateDesignCapture } from "../Controller/designs.controller.js";

const designsRouter = Router();

//rutas designs
designsRouter.get("/", getAllDesigns);
designsRouter.get("/:id", getDesignByIdCapture);
designsRouter.post("/", addDesignCapture);
designsRouter.put("/", updateDesignCapture);
designsRouter.delete("/", deleteDesignCapture);

export {designsRouter};
