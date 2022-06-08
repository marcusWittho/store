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

  async getUserByEmail(email) {
    const response = await knex('cadastro_usuario').where('email', email);

    return response;
  },

  async deleteUserModels(id) {
    await knex('cadastro_usuario').where('id', id).del();

    return { statusCode: 200, message: 'Usuário removido com sucesso.' };
  },
};
