import { Router } from "express";
import { createCartCapture, deleteCartCapture, getAllCartsCapture, getCartByIdCapture } from "../Controller/cart.controller.js";

const cartRouter = Router();

//rutas cart
cartRouter.get("/", getAllCartsCapture);
cartRouter.get("/:id", getCartByIdCapture);
cartRouter.post("/", createCartCapture);
cartRouter.delete("/id", deleteCartCapture);

export {cartRouter};