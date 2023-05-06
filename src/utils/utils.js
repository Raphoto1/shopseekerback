import path from "path";
import { fileURLToPath } from "url";

//dirname y file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//exports
export {__filename, __dirname};