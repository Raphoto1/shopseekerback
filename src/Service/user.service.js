//importapp
import jwt from "jsonwebtoken";

//import propio
import UserMongoDao from "../Dao/user.dao.js";
import { createCart } from "./cart.service.js";
import { options } from "../config/config.js";
import { createHash } from "../utils/utils.js";
import { validatePassword } from "../utils/utils.js";

const userManager = new UserMongoDao();

export const signIn = async (first_name, last_name, email, age, password) => {
  //confirmar que el correo no exista
  const chkEmail = await userManager.getUserByEmail(email);
  if (chkEmail) {
    console.log("usuario ya registrado");
    return "usuario ya registrado";
  } else {
    //ajustar role
    let role = "user";
    if (email.endsWith("@coder.com")) {
      role="admin"
    } else {
      role="user"
    }
    //empaquetar y enviar al manager
    const newUser = {
      first_name,
      last_name,
      email,
      age,
      password: createHash(password),
      role,
      cart: await createCart(),
    };
    const userCreated = await userManager.addUser(newUser);
    
    return userCreated;
  }
};

export const login = async (email, password) => {
  const userToLog = await userManager.getUserByEmail(email);
  if (userToLog) {
    if (validatePassword(password, userToLog)) {
      console.log("si existe el correo");
      return userToLog;
    } else {
      return false
    }
    console.log("si existe el correo");
  } else {
    return false
    console.log("no existe el correo");
  }
  return userToLog;
};
