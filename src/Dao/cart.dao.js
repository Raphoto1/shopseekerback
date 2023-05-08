import cartModel from "./Mongo/models/cart.model.js";

class CartMongoDao {
  constructor() {}
  //crear carrito
  async createCart() {
    try {
      const newCartData = {
        designs: [],
      };
      const newCart = await cartModel.create(newCartData);
      console.log(newCart);
      return newCart;
    } catch (error) {
      return error;
    }
  }
  //borrar carrito
  async deleteCart(cartId) {
    try {
      const chkCart = await this.getCart(cartId);
      console.log(chkCart);
      if (chkCart) {
        const cartToDelete = await cartModel.findByIdAndDelete(cartId);
        console.log("carrito eliminado");
        return cartToDelete;
      } else {
        return "cart not found";
      }
    } catch (error) {
      return error;
    }
  }
  //get carrito by Id y todos los carritos
  async getCart(cartId) {
    try {
      if (cartId) {
        console.log("paso por donde necesito");
        const oneCart = await cartModel
          .findById({ _id: `${cartId}` })
          .populate("designs.design")
          .lean();
        console.log(oneCart);
        return oneCart;
      } else {
        const allCarts = await cartModel.find();
        return allCarts;
      }
    } catch (error) {
      return error;
    }
  }
  //update cart block (add design, delete design)
  async addDesignToCart(cartId, designId, quantity) {
    try {
      const findDesign = await cartModel
        .findById(cartId)
        .populate("designs.design");
      const chkDesignExist = await findDesign.designs.findIndex(
        (des) => des.design._id.toString() === designId
      );
      let quantityToAdd = quantity ? quantity : 1;
      if (chkDesignExist !== -1) {
        findDesign.designs[chkDesignExist].quantity += Number(quantityToAdd);
      } else {
        findDesign.designs.push({ design: designId, quantity: quantityToAdd });
      }
      return findDesign.save();
    } catch (error) {
      // return error;
      throw new Error(error);
    }
  }

  //clear cart
  async clearCart(cartId) {
    try {
      const cartToClear = await cartModel.updateOne(
        { _id: cartId },
        { $pull: { products: {} } }
      );
      return cartToClear;
    } catch (error) {
      return error;
    }
  }
}

export default CartMongoDao;
