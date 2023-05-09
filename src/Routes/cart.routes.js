import { Router } from "express";
import { addDesignToCartCapture, clearCartCapture, createCartCapture, deleteCartCapture, deleteDesignFromCartCapture, getAllCartsCapture, getCartByIdCapture } from "../Controller/cart.controller.js";

const cartRouter = Router();

//rutas cart
cartRouter.get("/", getAllCartsCapture);
cartRouter.get("/:cartId", getCartByIdCapture);
cartRouter.post("/", createCartCapture);
cartRouter.put("/", addDesignToCartCapture);
cartRouter.delete("/clear/:cartId", clearCartCapture);
cartRouter.delete("/:cartId/design/:desId", deleteDesignFromCartCapture);
cartRouter.delete("/:cartId", deleteCartCapture);

export {cartRouter};