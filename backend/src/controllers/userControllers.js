const {
  getAllServices,
} = require('../services/userServices');

const getAllController = async (_req, res) => {
  const response = await getAllServices();

  return res.status(200).json(response);
};

module.exports = {
  getAllController,
};
