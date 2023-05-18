import { Router } from "express";
import { chatCapture } from "../Controller/chat.controller.js";
import { authenticate } from "../middlewares/authenticate.js";

const chatRouter = Router();

chatRouter.get("/",authenticate("authJWT"), chatCapture);


export {chatRouter};