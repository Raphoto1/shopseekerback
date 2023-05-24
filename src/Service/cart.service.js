import CartMongoDao from "../Dao/cart.dao.js";
import DesignMongoDao from "../Dao/designs.dao.js";
import { getDesignById } from "./designs.service.js";

const designManager = new DesignMongoDao();

const cartManager = new CartMongoDao();

export const createCart = () => {
  const newCart = cartManager.createCart();
  return newCart;
};

export const getAllCarts = (cartId) => {
  const getCart = cartManager.getCart(cartId);
  return getCart;
};

export const deleteCart = (cartId) => {
  const cartToDelete = cartManager.deleteCart(cartId);
  return cartToDelete;
};

export const addDesignToCart = (cartId, desId, quantity) => {
  //confirmar existencia del diseño PENDIENTE
  const designToAdd = cartManager.addDesignToCart(cartId, desId, quantity);
  return designToAdd;
};

export const deleteDesignFromCart = (cartId, desId) => {
  const designToDelete = cartManager.deleteDesign(cartId, desId);
  return designToDelete;
};

export const clearCart = (cartId) => {
  const cartToClear = cartManager.clearCart(cartId);
  return cartToClear;
};

export const cartPurchase = async (cartId, userId) => {
  //se trae el carrito
  const cartToWork = await cartManager.getCart(cartId);
  //extraigo los id de los diseños en el carrito
  const designCodes = [];
  await cartToWork.designs.forEach((e) => {
    const designsFiltered = {
      designId: e.design._id,
      designQuanty: e.quantity,
    };
    designCodes.push(designsFiltered);
  });
  return designCodes
  //reviso el stock de cada diseño
  const chkArray = []
  await designCodes.forEach(async (e)=>{
    const singleDesign = await getDesignById(e.designId);
    const stock = singleDesign.stock
    // console.log(`esto es test 2${singleDesign} y esto es ${e.designQuanty}`);
    chkArray.push(stock)
    console.log(chkArray);
  });
  console.log(chkArray);

  return chkArray
  // console.log(`esto es por fuera de stock${designStock}`);
  
};
