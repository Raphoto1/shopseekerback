import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const MONGO_URL = process.env.MONGO_URL;
const COOKIE_TOKEN = process.env.COOKIE_TOKEN;
const SECRET_TOKEN = process.env.SECRET_TOKEN;

export const options = {
    server:{
        port:PORT,
        cookieToken:COOKIE_TOKEN,
        secretToken:SECRET_TOKEN
    },
    mongo:{
        url:MONGO_URL
    }
}