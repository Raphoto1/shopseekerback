import ticketMongoDao from "../Dao/ticket.dao.js";
import { getAllCarts } from "./cart.service";
import { getDesignById } from "./designs.service.js";

export const createNewTicket = async (
    cart, userId
) => {
    //revisar el carrito que vamos a trabajar
    const cartToChk = getAllCarts(cart);
    //revisar los productos que estan en el cart
    const productList = cartTocheck.designs;
    console.log(productList);
    //revisar que el stock de cada producto producto stock tiene

    getDesignById()
}