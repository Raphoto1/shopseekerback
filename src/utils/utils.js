import path from "path";
import { fileURLToPath } from "url";
import bcrypt from "bcrypt";
import { Faker, en } from "@faker-js/faker";

//dirname y file
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//bcrypt
const createHash = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync());
};

const validatePassword = (password, user) => {
  return bcrypt.compareSync(password, user.password);
};

//faker

const customFaker = new Faker({
  locale: [en],
});

const { database, commerce, datatype, number, helpers } = customFaker;

const generateDesigns = () => {
  return {
    id: database.mongodbObjectId(),
    title: commerce.productName(),
    description: commerce.productDescription(),
    category: commerce.department(),
    price: parseFloat(commerce.price()),
    status: datatype.boolean(),
    favorites: number.int(100),
    shops: helpers.arrayElement([`redb`, `society`, `displate`, `tee`], {min:2, max:4}),
    photos: helpers.arrayElement([`img1.jpg`,`img2.jpg`, `img3.jpg`],{min:1,max:3})
  };
};

//exports
export { __filename, __dirname, createHash, validatePassword, generateDesigns };
