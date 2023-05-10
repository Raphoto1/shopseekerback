//importapp
import jwt from "jsonwebtoken";
import passport from "passport";
import cookieParser from "cookie-parser";
//importPropio
import { signIn, login } from "../Service/user.service.js";
import { options } from "../config/config.js";

export const signInCapture = async (req, res) => {
  const { first_name, last_name, email, age, password } = req.body;
  //preguntar por la seguridad al pasar esto a service
  //pasar data a service
  const result = signIn(first_name, last_name, email, age, password);
  // token para jwt
  const token = jwt.sign(
    {
      _id: result._id,
      first_name: result.first_name,
      last_name: result.last_name,
      email: result.email,
      role: result.role,
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
  console.log(result);
  if (result === false) {
    res.json({ status: "failed", payLoad: "email or pass failed" });
  } else {
      // token para jwt
      const token = jwt.sign(
        {
          _id: result._id,
          first_name: result.first_name,
          last_name: result.last_name,
          email: result.email,
          role: result.role,
        },
        options.server.secretToken,
        { expiresIn: "24h" }
      );
      res.cookie(options.server.cookieToken, token, { httpOnly: true });
      res.json({ status: "success", payLoad: result });
  }
};

export const profileCall = async (req,res) =>{
  const token = req.cookies[options.server.cookieToken];
  const info = jwt.verify(token,options.server.secretToken);
  console.log(info);
  res.json({ status: "success", payLoad: info });
}

export const logoutCapture = async (req,res, next) =>{
    res.cookie(options.server.cookieToken).send("borrada la cookie")
}
