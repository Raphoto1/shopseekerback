import { Router } from "express";
import { addDesignToCartCapture, createCartCapture, deleteCartCapture, getAllCartsCapture, getCartByIdCapture } from "../Controller/cart.controller.js";

const cartRouter = Router();

//rutas cart
cartRouter.get("/", getAllCartsCapture);
cartRouter.get("/:cartId", getCartByIdCapture);
cartRouter.post("/", createCartCapture);
cartRouter.delete("/:cartId", deleteCartCapture);
cartRouter.put("/", addDesignToCartCapture);

export {cartRouter};