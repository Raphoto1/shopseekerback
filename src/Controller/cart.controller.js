import { getAllCarts, deleteCart, createCart } from "../Service/cart.service.js";

export const createCartCapture = async (req,res) =>{
    const result = await createCart();
    res.json({ status: "success", payLoad: result });
}

export const getAllCartsCapture = async(req,res) =>{
    const result = await getAllCarts();
    res.json({ status: "success", payLoad: result });
}

export const getCartByIdCapture = async(req,res) =>{
    const cartId = req.param.cartId;
    const result = await getAllCarts(cartId);
    res.json({ status: "success", payLoad: result });
}

export const deleteCartCapture = async(req,res) =>{
    const cartId = req.param.cartId;
    const result = await deleteCart(cartId);
    res.json({ status: "success", payLoad: result });
}