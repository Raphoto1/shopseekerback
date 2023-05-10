import CartMongoDao from "../Dao/cart.dao.js";

const cartManager = new CartMongoDao();

export const createCart = () => {
    const newCart = cartManager.createCart();
    return newCart;
}

export const getAllCarts = (cartId) =>{
    const getCart = cartManager.getCart(cartId);
    return getCart;
}

export const deleteCart = (cartId) =>{
    const cartToDelete = cartManager.deleteCart(cartId);
    return cartToDelete;
}

export const addDesignToCart = (cartId, desId, quantity) =>{
    //confirmar existencia del diseño PENDIENTE
    const designToAdd = cartManager.addDesignToCart(cartId, desId, quantity);
    return designToAdd;
}

export const deleteDesignFromCart = (cartId, desId) =>{
    const designToDelete = cartManager.deleteDesign(cartId, desId);
    return designToDelete;
}

export const clearCart = (cartId) =>{
    const cartToClear = cartManager.clearCart(cartId);
    return cartToClear;
}