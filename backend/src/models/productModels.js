const knex = require('../config/db');

module.exports = {
  async getAllProductsModels() {
    const response = await knex('cadastro_produto');

    return response;
  },

  async addProductModels(newProduct) {
    const [response] = await knex('cadastro_produto').insert(newProduct);

    return { id: response.insertId };
  },

  async getProductByName(name) {
    const response = await knex('cadastro_produto').where('nome_produto', name);

    return response;
  },

  async deleteProductModels(id) {
    await knex('cadastro_produto').where('id', id).del();

    return { statusCode: 200, message: 'Produto removido com sucesso.' };
  },

  async updateProductModels(id, productUpdated) {
    await knex('cadastro_produto')
      .where('id', id)
      .update(productUpdated);

    return { statusCode: 200, message: 'Informações atualizadas.' };
  },
};
