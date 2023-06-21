import { Router } from "express";
import { forgotPassCapture, loginCapture, logoutCapture, profileCall, resetPasswordCapture, signInCapture } from "../Controller/user.controller.js";

const userRouter = Router();

//rutas users
userRouter.post("/signin",signInCapture);
userRouter.post("/login", loginCapture);
userRouter.get("/profile", profileCall);
userRouter.post("/logout", logoutCapture);
userRouter.post("/forgot-password", forgotPassCapture);
userRouter.post("/reset-password", resetPasswordCapture);

export{userRouter};