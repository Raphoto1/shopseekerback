//imports de paquetes
import express from "express";
import { urlencoded } from "express";
import path from "path"
import passport from "passport";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import { Server } from "socket.io";
import handlebars from "express-handlebars"

//imports de propio
import { options } from "./config/config.js";
import { ConnectionDb } from "./Dao/Mongo/connectionDb.js";
import { __dirname } from "./utils/utils.js";
import { designsRouter } from "./Routes/designs.routes.js";
import { cartRouter } from "./Routes/cart.routes.js";
import { userRouter } from "./Routes/user.routes.js";
import { initializePassport } from "./config/passport.config.js";
import { webRouter } from "./Routes/web.routes.js";
import { chatRouter } from "./Routes/chat.routes.js";
import {ioSocket} from "./sockets/ioSockets.sockets.js"

//express
const app = express();
const port = options.server.port;
//connections port
const httpServer = app.listen(port, () => console.log(`Server listening on port ${port}`));

//websocket desde externo
ioSocket(httpServer);

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

//HBS plantillas
app.engine(".hbs",handlebars.engine({extname: '.hbs'}));
app.set('views',path.join(__dirname, "../views"));
app.set("view engine", ".hbs");


//configuracion de passport
initializePassport();
app.use(passport.initialize());

//rutas Principales
app.use("/",webRouter);
app.use("/api/designs", designsRouter);
app.use("/api/cart", cartRouter);
app.use("/api/user", userRouter);
//rutas secundarias
app.use("/chat", chatRouter);

//test cors
app.get("/test", async (req, res) => {
  res.send({ payload: "respuesta" });
});


//connection mongo
const dbInstance = ConnectionDb.getInstance();
