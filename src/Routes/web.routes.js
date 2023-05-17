import { Router } from "express";
import {
  renderCart,
  renderChat,
  renderDesigns,
  renderIndex,
  renderLogin,
  renderProfile,
  renderSignin,
} from "../Controller/web.controller.js";

const webRouter = Router();

webRouter.get("/", renderIndex);
webRouter.get("/signin", renderSignin);
webRouter.get("/login", renderLogin);
webRouter.get("/profile", renderProfile);
webRouter.get("/designs", renderDesigns);
webRouter.get("/cart", renderCart);
webRouter.get("/designs/:pid");
webRouter.get("/cart/:cid");
webRouter.get("/chat", renderChat);

//rutas vistas autenticacion

export { webRouter };
