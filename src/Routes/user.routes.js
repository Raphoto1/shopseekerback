import { Router } from "express";
import { authenticate } from "../middlewares/authenticate.js";
import { changeRoleCapture, forgotPassCapture, loginCapture, logoutCapture, picTest, profileCall, resetPasswordCapture, signInCapture } from "../Controller/user.controller.js";
import { uploaderProfile } from "../utils/multer.js";

const userRouter = Router();

//rutas users
userRouter.post("/signin",signInCapture);
userRouter.post("/login", loginCapture);
userRouter.get("/profile",authenticate("authJWT"), profileCall);
userRouter.post("/logout", logoutCapture);
userRouter.post("/forgot-password", forgotPassCapture);
userRouter.post("/reset-password", resetPasswordCapture);
userRouter.put("/premium/:uid", authenticate("authJWT"), changeRoleCapture)
userRouter.post("/pic",uploaderProfile.single("avatar"), picTest)

export{userRouter};