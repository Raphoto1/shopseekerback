//imports de paquetes
import express from "express";
import { urlencoded } from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import { Server } from "socket.io";

//imports de propio
import { options } from "./config/config.js";
import { ConnectionDb } from "./Dao/Mongo/connectionDb.js";
import { __dirname } from "./utils/utils.js";
import { designsRouter } from "./Routes/designs.routes.js";
import { cartRouter } from "./Routes/cart.routes.js";
import { userRouter } from "./Routes/user.routes.js";
import { initializePassport } from "./config/passport.config.js";

//express
const app = express();
const port = options.server.port;

//midles de Node
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../../public"));
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);
app.use(cookieParser());

//configuracion de passport
initializePassport();
app.use(passport.initialize());

//rutas
app.use("/api/designs", designsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/user", userRouter);

//test cors
app.get("/test", async (req, res) => {
  res.send({ payload: "respuesta" });
});

//socketIo
// const io = new Server(httpServer);

//connections port
app.listen(port, () => console.log(`Server listening on port ${port}`));
//connection mongo
const dbInstance = ConnectionDb.getInstance();
