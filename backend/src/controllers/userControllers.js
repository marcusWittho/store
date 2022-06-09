const crypto = require('../helpers/crypto');
const {
  getAllServices,
  addUserServices,
  deleteUserServices,
  updateUserServices,
  loginServices,
} = require('../services/userServices');

module.exports = {
  async loginControlelrs(req, res) {
    const { email, password } = req.body;

    const response = await loginServices(email, password);

    return res.status(200).json(response);
  },

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

  async updateUserControllers(req, res) {
    const {
      nome_usuario: username, tipo_usuario: userType, email, password,
    } = req.body;
    const { id } = req.params;

    const encryptedPass = crypto.encrypt(password);

    const newUser = {
      nome_usuario: username,
      tipo_usuario: userType,
      email,
      password: encryptedPass.password,
      password_iv: encryptedPass.iv,
    };

    const response = await updateUserServices(id, newUser);

    return res.status(200).json(response);
  },
};
