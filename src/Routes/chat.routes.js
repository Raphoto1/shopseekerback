import { Router } from "express";
import { chatCapture } from "../Controller/chat.controller.js";

const chatRouter = Router();

chatRouter.put("/", chatCapture);


export {chatRouter};