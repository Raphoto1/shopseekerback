import designModel from "./Mongo/models/designs.model.js";

class DesignMongoDao {
  constructor() {}

  async getDesigns(limit, page, sortQ, queryKey, queryParam) {
    //filtros
    let limitIn = limit ? limit : 25;
    let pageIn = page ? page: 1;
    let sortIn = sortQ ? {stock: sortQ}: false;
    //queries
    let queryKeyIn = queryKey;
    let queryIn = queryParam;
    let querySearch;
//query pack
    if (queryKeyIn && queryIn) {
      querySearch = { [queryKeyIn]: [queryIn] };
      options.limit = 5;
    } else {
      {}
    }
    //empaqueto filtros
    let options = {limit:limitIn, page:pageIn, sort:sortIn};
    try {
      const designs = await designModel.paginate(querySearch,options);
      return designs;
    } catch (error) {
      return error;
    }
  }

  async addDesign(dataDesLoad){
    const designToPush = await designModel.create(dataDesLoad);
    console.log("diseño agregado a db");
    return designToPush
  }
//code, title,description,category,price,status,favorites,shops,photos
}

export default DesignMongoDao