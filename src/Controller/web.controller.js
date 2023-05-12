import { profileCall } from "./user.controller.js";
import { options } from "../config/config.js";
import passport from "passport";
import jwt from "jsonwebtoken";
import { getDesigns } from "../Service/designs.service.js";
import { getUserToken } from "../Service/user.service.js";

export const renderSignin = async (req, res) => {
  try {
    res.render("signin");
  } catch (error) {
    res.send(`<div>Hubo un error al cargar esta vista</div>`);
  }
};

export const renderIndex = async (req, res) => {
  try {
    res.render("index");
  } catch (error) {
    res.send(`<div>Hubo un error al cargar esta vista</div>`);
  }
};

export const renderLogin = async (req, res) => {
  try {
    res.render("login");
  } catch (error) {
    res.send(`<div>Hubo un error al cargar esta vista</div>`);
  }
};

export const renderDesigns = async (req, res) => {
  try {
    let token = req.cookies[options.server.cookieToken];
    passport.authenticate("jwt", { session: false });
    const userData = jwt.verify(token, options.server.secretToken);
    const userCart = userData.cart[0]._id
    console.log(userData.cart[0]._id);
    const designs = await getDesigns()
    res.render("designs", {designs,userCart});
  } catch (error) {
    console.log(error);
    res.send(`<div>Hubo un error al cargar esta vista</div>`);
  }
};

export const renderProfile = async (req, res) => {
  try {
    //problemas al extraer desde la funcion de user.controller
    let token = req.cookies[options.server.cookieToken];
  passport.authenticate("jwt", { session: false });
  const userData = jwt.verify(token, options.server.secretToken);
  console.log(userData);
    res.render("profile", {userData});
  } catch (error) {
    console.log(error);
    res.send(`<div>Hubo un error al cargar esta vista</div>`);
  }
};
