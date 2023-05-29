//imports de app
import { Router } from "express";
//imports propios
import { addDesignCapture, deleteDesignCapture, getAllDesigns, getDesignByIdCapture, getDesignsFiltered, getDesignsLive, updateDesignCapture } from "../Controller/designs.controller.js";
import { authenticate } from "../middlewares/authenticate.js";
import { authorize } from "../middlewares/authorize.js";

const designsRouter = Router();

//rutas designs
designsRouter.get("/",authenticate("authJWT"), authorize("admin"),getAllDesigns);
designsRouter.get("/filtered", getDesignsFiltered);
designsRouter.get("/:id", getDesignByIdCapture);
designsRouter.post("/",authenticate("authJWT"), authorize("admin"), addDesignCapture);
designsRouter.put("/",authenticate("authJWT"), authorize("admin"), updateDesignCapture);
designsRouter.delete("/",authenticate("authJWT"), authorize("admin"), deleteDesignCapture);
designsRouter.get("/filtered/live", getDesignsLive);

export {designsRouter};
