import {
  getDesigns,
  addDesignPack,
  deleteDesign,
  getDesignById,
  updateDesign,
} from "../Service/designs.service.js";

export const getAllDesigns = async (req, res) => {
  const results = await getDesigns();
  res.json({ status: "success", payLoad: results });
};

export const getDesignByIdCapture = async (req,res) =>{
    const designId = req.params.id;
    const result = await getDesignById(designId);
    res.json({ status: "success", payLoad: result });
}

export const addDesignCapture = async (req, res) => {
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
    //envio
    const result = await addDesignPack(
      code,
      title,
      description,
      category,
      price,
      stock,
      shops,
      photos
    );
    res.json({ status: "success", payLoad: result });
  } catch (error) {
    res.status(404).send({ error: `error desde controller${error}` });
  }
};

export const updateDesignCapture = async (req,res) =>{
    try {
        const desId = req.body.desId;
        const value = req.body.value;
        const data = req.body.data
        const result = await updateDesign(desId,value,data);
        res.json({ status: "success", payLoad: result });
    } catch (error) {
        res.status(404).send({ error: `error desde controller ${error}` });
    }
}

export const deleteDesignCapture = async (req, res) => {
  try {
    //captura de datos
    const designId = req.body.designId;
    console.log(designId);
    //envio
    const result = await deleteDesign(designId);
    res.json({ status: "success", payLoad: result });
  } catch (error) {
    res.status(404).send({ error: "error desde controller" });
  }
};
