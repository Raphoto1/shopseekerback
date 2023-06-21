import userModel from "./Mongo/models/user.model.js";

class UserMongoDao {
  constructor() {}

  //crear user
  async addUser(dataPacked) {
    try {
      const userToPush = await userModel.create(dataPacked);
      console.log("Usuario creado");
      return userToPush;
    } catch (error) {
      return error;
    }
  }

  //getUser By Id
  async getUser(userId) {}

  //getUser by email
  async getUserByEmail(email) {
    const userToChk = await userModel.findOne({ email: email });
    return userToChk;
  }

  //actualizar user
  async updateUserPass(email, dataUpdate) {
    const update = await userModel.findOneAndUpdate({ email: email }, dataUpdate);
    return update;
  }

  //eliminar user
  async deleteUser(userId) {
    try {
    } catch (error) {
      return error;
    }
  }
  //modificar user
}

export default UserMongoDao;
