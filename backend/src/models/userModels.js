const knex = require('../config/db');

module.exports = {
  async getAllModels() {
    const response = await knex('cadastro_usuario');

    return response;
  },

  async addUserModels(newUser) {
    const [response] = await knex('cadastro_usuario').insert([newUser]);

    return { id: response.insertId };
  },
};
