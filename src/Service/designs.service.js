import DesignMongoDao from "../Dao/designs.dao.js";

const designManager = new DesignMongoDao();

export const getDesigns = ()=>{
    const designs = designManager.getDesigns();
    return designs;
};

export const addDesignPack = (code, title,description,category,price,stock,shops,photos) =>{
    const designPack = {code, title,description,category,price,stock,shops,photos}
    console.log(`data en service ${designPack}}`);
    const designToAdd = designManager.addDesign(designPack);
    return designToAdd
}