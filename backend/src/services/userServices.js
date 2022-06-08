const {
  getAllModels,
} = require('../models/userModels');

const getAllServices = async () => {
  const response = await getAllModels();

  return response;
};

module.exports = {
  getAllServices,
};
