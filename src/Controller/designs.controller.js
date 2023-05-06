import { getDesigns, addDesignPack } from "../Service/designs.service.js";

export const getAllDesigns = async (req,res) =>{
    const results = await getDesigns();
    res.json({status:"success", payLoad:results});
}

export const addDesignCapture = async (req,res) =>{
    try {
        //captura de data
        const code = Number(req.body.code);
        const title = req.body.title;
        const description = req.body.description;
        const category = req.body.category;
        const price = Number(req.body.price);
        const stock = Number(req.body.stock);
        const shops = req.body.shops;
        const photos = req.body.photos;
        //prueba de llegada
        const test = console.log(`esto se ve desde controller${code},${title},${description},${category},${price},${stock},${shops},${photos}`);
        const result = await addDesignPack(code,title,description,category,price,stock,shops,photos);
        res.send(result);
    } catch (error) {
        res.status(404).send({error: `error desde controller${error}`})
    }
}