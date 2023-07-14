import multer from "multer";
import path from "path";
import { __dirname, __filename } from "./utils.js";

//profile pic Upload
const profilePicStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "/multer/users/images"))
    },
    filename: function (req, file, cb) {
        cb(null, `${req.body.email}-profile-${file.originalname}`)
    }
});

export const uploaderProfile = multer({storage:profilePicStorage})