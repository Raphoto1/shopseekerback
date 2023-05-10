import { Router } from "express";
import { loginCapture, logoutCapture, profileCall, signInCapture } from "../Controller/user.controller.js";

const userRouter = Router();

//rutas users
userRouter.post("/signin",signInCapture);
userRouter.post("/login", loginCapture);
userRouter.get("/profile", profileCall);
userRouter.post("/logout", logoutCapture);

export{userRouter};