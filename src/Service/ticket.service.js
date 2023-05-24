import ticketMongoDao from "../Dao/ticket.dao.js";

export const createNewTicket = async (
    cart, userId, designs
) => {
    const newTicket = {
        cartId: cart,
        user: userId,
        designs: designs
    }
    console.log(newTicket);
    return newTicket
}