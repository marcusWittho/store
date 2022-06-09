const {
  getAllProductsModels,
} = require('../models/productModels');

module.exports = {
  async getAllProductsServices() {
    const response = await getAllProductsModels();

    return response;
  },
};
