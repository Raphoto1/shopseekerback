//imports app
import dotenv from "dotenv";
import path from "path";
//imports propios
import { __dirname } from "../utils/utils.js";

const enviroment = "dev";
const pathEnvironment = enviroment === "prod" ? path.join(__dirname,"../../.env.production") : path.join(__dirname,"../../.env.development");
console.log(`estas en entorno ${enviroment}`);
dotenv.config({
    path: pathEnvironment
});

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const COOKIE_TOKEN = process.env.COOKIE_TOKEN;
const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const options = {
    server:{
        env: enviroment,
        port:PORT,
        cookieToken:COOKIE_TOKEN,
        secretToken:SECRET_TOKEN
    },
    mongo:{
        url:MONGO_URL
    }
}