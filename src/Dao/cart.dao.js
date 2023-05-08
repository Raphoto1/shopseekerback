import cartModel from "./Mongo/models/cart.model.js";

class CartMongoDao {
  constructor() {}
  //crear carrito
  async createCart() {
    try {
      const newCart = await cartModel.create();
      console.log(newCart);
      return newCart;
    } catch (error) {
      return error;
    }
  }
  //borrar carrito
async deleteCart(cartId){
 try {
    const chkCart = await this.getCart(cartId)
    if (chkCart) {
        const cartToDelete = await cartModel.findByIdAndDelete(cartId);
        console.log("carrito eliminado");
        return cartToDelete;
    } else {
        return "cart not found"
    }
 } catch (error) {
    return error
 }
}
  //get carrito by Id y todos los carritos
async getCart(cartId){
    try {
        if (cartId) {
            const oneCart = await cartModel.find({_id: `${cartId}`})
            .populate("designs.design").lean();
            return oneCart;
        } else {
            const allCarts = await cartModel.find();
            return allCarts;
        }
        
    } catch (error) {
        return error
    }
}
  //update cart
}
