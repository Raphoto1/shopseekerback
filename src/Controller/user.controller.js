//importapp
import jwt from "jsonwebtoken";
import passport from "passport";
import cookieParser from "cookie-parser";
//importPropio
import { signIn, login, getUserToken } from "../Service/user.service.js";
import { options } from "../config/config.js";
import {CustomError} from "../Service/Error/customError.service.js"
import { generateUserErrorInfo } from "../Service/Error/userErrorInfo.js";
import { EError } from "../enums/EError.js";

export const signInCapture = async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;
  //EError
  if (!first_name || !last_name || !email || !age || !password) {
    CustomError.createError({
      name:"User create error",
      cause: generateUserErrorInfo(first_name,last_name,email),
      message:"Error al crear el usuario",
      errorCode:EError.INVALID_PARAMS
    });
  }
  //preguntar por la seguridad al pasar esto a service
  //pasar data a service
  const result = signIn(first_name, last_name, email, age, password);
  //se crea isAdmin para hbs
  let isAdmin = false;
    if (result.role === "admin") {isAdmin = true}
  // token para jwt
  const token = jwt.sign(
    {
      _id: result._id,
      first_name: result.first_name,
      last_name: result.last_name,
      email: result.email,
      role: result.role,
      isAdmin: isAdmin
    },
    options.server.secretToken,
    { expiresIn: "24h" }
  );
  res.cookie(options.server.cookieToken, token, { httpOnly: true });
  res.json({ status: "success", payLoad: result });
};

export const loginCapture = async (req, res) => {
  const { email, password } = req.body;
  const result = await login(email, password);
  req.logger.info(result);
  if (result === false) {
    res.json({ status: "failed", payLoad: "email or pass failed" });
  } else {
    //se crea isAdmin para hbs
    let isAdmin = false;
    if (result.role === "admin") {isAdmin = true}

    // token para jwt
    const token = jwt.sign(
      {
        _id: result._id,
        first_name: result.first_name,
        last_name: result.last_name,
        cart:result.cart,
        email: result.email,
        role: result.role,
        isAdmin: isAdmin
      },
      options.server.secretToken,
      { expiresIn: "24h" }
    );
    res
      .cookie(options.server.cookieToken, token, { httpOnly: true })
      // .json({ status: "success", payLoad: result })
      .redirect("/profile");
  }
};

export const profileCall = async (req, res) => {
  let token = req.cookies[options.server.cookieToken];
  passport.authenticate("jwt", { session: false });
  const info = jwt.verify(token, options.server.secretToken);
  res.json({ status: "success", payLoad: info });
};

export const logoutCapture = async (req, res, next) => {
  res
  .clearCookie(`${options.server.cookieToken}`)
  .redirect(303,"/login");
};
