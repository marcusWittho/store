const {
  getAllModels, addUserModels,
} = require('../models/userModels');

const isValid = (newUser) => {
  if (!newUser.nome_usuario || typeof newUser.nome_usuario !== 'string') return false;
  if (!newUser.tipo_usuario || typeof newUser.tipo_usuario !== 'string') return false;
  if (!newUser.email || typeof newUser.email !== 'string') return false;
  if (!newUser.password || typeof newUser.password !== 'string') return false;

  return true;
};

module.exports = {
  async getAllServices() {
    const response = await getAllModels();

    return response;
  },

  async addUserServices(newUser) {
    const isValidUser = isValid(newUser);

    if (!isValidUser) return { statusCode: 400, message: 'Preencha os campos corretamente' };

    const { id } = await addUserModels(newUser);

    return { id };
  },
};
