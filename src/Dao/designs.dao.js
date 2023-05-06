import designModel from "./Mongo/models/designs.model.js";

class DesignMongoDao {
  constructor() {}

  async getDesigns(limit, page, sortQ, queryKey, queryParam) {
    //filtros
    let limitIn = limit ? limit : 25;
    let pageIn = page ? page: 1;
    let sortIn = sortQ ? {stock: sortQ}: false;
    //empaqueto filtros
    let options = {limit:limitIn, page:pageIn, sort:sortIn};
    try {
      const designs = await designModel.paginate(options);
      return designs;
    } catch (error) {
      return error;
    }
  }

  async addDesign(
    dataDesLoad
  ){
    //paquete de design
    // const designToCreate = {
    //   code, title,description,category,price,status,favorites,shops,photos
    // }
    const designToPush = await designModel.create(dataDesLoad);
    console.log("diseño agregado a db");
    return designToPush
  }
//code, title,description,category,price,status,favorites,shops,photos
}

export default DesignMongoDao