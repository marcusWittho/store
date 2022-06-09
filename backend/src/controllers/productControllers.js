const {
  getAllProductsServices,
} = require('../services/productServices');

module.exports = {
  async getAllProductsControllers(req, res) {
    const response = await getAllProductsServices();

    return res.status(200).json(response);
  },
};
