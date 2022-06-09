const crypto = require('../helpers/crypto');
const {
  getAllModels,
  addUserModels,
  getUserByEmail,
  deleteUserModels,
  updateUserModels,
} = require('../models/userModels');

const isValid = (newUser) => {
  if (!newUser.nome_usuario || typeof newUser.nome_usuario !== 'string') return false;
  if (!newUser.tipo_usuario || typeof newUser.tipo_usuario !== 'string') return false;
  if (!newUser.email || typeof newUser.email !== 'string') return false;
  if (!newUser.password || typeof newUser.password !== 'string') return false;

  return true;
};

module.exports = {
  async loginServices(email, password) {
    if (!email || typeof email !== 'string') return false;
    if (!password || typeof password !== 'string') return false;

    const [userExists] = await getUserByEmail(email);

    if (userExists === undefined) {
      return { statusCode: 400, message: 'Email não cadastrado.' };
    }

    const encrypted = { password: userExists.password, iv: userExists.password_iv };
    const decryptedPass = crypto.decrypt(encrypted);

    if (decryptedPass !== password) {
      return { statusCode: 400, message: 'Senha incorreta.' };
    }

    return { statusCode: 200, message: `Olá, ${userExists.nome_usuario}` };
  },

  async getAllServices() {
    const response = await getAllModels();

    return response;
  },

  async addUserServices(newUser) {
    const isValidUser = isValid(newUser);

    if (!isValidUser) {
      return { statusCode: 400, message: 'Preencha os campos corretamente' };
    }

    const userExists = await getUserByEmail(newUser.email);

    if (userExists[0]) {
      return { statusCode: 409, message: 'Usuário já cadastrado' };
    }

    const { id } = await addUserModels(newUser);

    return { id };
  },

  async deleteUserServices(id) {
    if (!id) return false;

    const response = await deleteUserModels(id);

    return response;
  },

  async updateUserServices(id, userUpdated) {
    const response = await updateUserModels(id, userUpdated);

    return response;
  },
};
