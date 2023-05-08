//imports de paquetes
import express from "express";
import { urlencoded } from "express";

//imports de propio
import { options } from "./config/config.js";
import { ConnectionDb } from "./Dao/Mongo/connectionDb.js";
import { __dirname } from "./utils/utils.js";
import { designsRouter } from "./Routes/designs.routes.js";

//express
const app = express();
const port = options.server.port;

//midles
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../../public"));

//rutas
app.use("/api/designs", designsRouter);

//connections port
app.listen(port,()=>console.log(`Server listening on port ${port}`));
//connection mongo
const dbInstance = ConnectionDb.getInstance();