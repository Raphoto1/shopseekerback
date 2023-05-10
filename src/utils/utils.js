import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";

//dirname y file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//bcrypt
const createHash = (password) =>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync());
}

const validatePassword = (password, user) =>{
    return bcrypt.compareSync(password, user.password);
}

//exports
export {__filename, __dirname, createHash, validatePassword};