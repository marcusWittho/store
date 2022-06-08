const crypto = require('../helpers/crypto');
const {
  getAllServices, addUserServices,
} = require('../services/userServices');

module.exports = {
  async getAllController(_req, res) {
    const response = await getAllServices();

    return res.status(200).json(response);
  },

  async addUserController(req, res) {
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
};
