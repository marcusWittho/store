const knex = require('../config/db');

const getAllModels = async () => {
  const response = await knex('cadastro_usuario');

  return response;
};

module.exports = {
  getAllModels,
};
