const crypto = require('../helpers/crypto');
const {
  getAllServices, addUserServices, deleteUserServices,
} = require('../services/userServices');

module.exports = {
  async getAllControllers(_req, res) {
    const response = await getAllServices();

    return res.status(200).json(response);
  },

  async addUserControllers(req, res) {
    const {
      nome_usuario: username, tipo_usuario: userType, email, password,
    } = req.body;

    const encryptedPass = crypto.encrypt(password);

    const newUser = {
      nome_usuario: username,
      tipo_usuario: userType,
      email,
      password: encryptedPass.password,
      password_iv: encryptedPass.iv,
    };

    const addedUser = await addUserServices(newUser);

    if (addedUser.statusCode) {
      return res
        .status(addedUser.statusCode)
        .json({ message: addedUser.message });
    }

    return res.status(201).json({ message: 'Usuário adicionado com sucesso' });
  },

  async deleteUserControllers(req, res) {
    const { id } = req.params;

    const response = await deleteUserServices(id);

    return res.status(response.statusCode).json({ message: response.message });
  },
};
