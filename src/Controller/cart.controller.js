import { getAllCarts, deleteCart, createCart, addDesignToCart } from "../Service/cart.service.js";

export const createCartCapture = async (req,res) =>{
    const result = await createCart();
    res.json({ status: "success", payLoad: result });
}

export const getAllCartsCapture = async(req,res) =>{
    const result = await getAllCarts();
    res.json({ status: "success", payLoad: result });
}

export const getCartByIdCapture = async(req,res) =>{
    const cartId = req.params.cartId;
    console.log(cartId);
    const result = await getAllCarts(cartId);
    res.json({ status: "success", payLoad: result });
}

export const deleteCartCapture = async(req,res) =>{
    const cartId = req.params.cartId;
    const result = await deleteCart(cartId);
    res.json({ status: "success", payLoad: result });
}

export const addDesignToCartCapture = async (req,res) =>{
    const cartId = req.body.cartId;
    const designId = req.body.designId;
    const quantity = req.body.quantity;
    const result = await addDesignToCart(cartId,designId,quantity);
    res.json({ status: "success", payLoad: result });
}