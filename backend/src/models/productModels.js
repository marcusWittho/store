const knex = require('../config/db');

module.exports = {
  async getAllProductsModels() {
    const response = await knex('cadastro_produto');

    return response;
  },
};
