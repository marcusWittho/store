const {
  getAllProductsModels, addProductModels, getProductByName,
} = require('../models/productModels');

const isValid = (newProduct) => {
  if (!newProduct.nome_produto || typeof newProduct.nome_produto !== 'string') return false;
  if (!newProduct.descricao || typeof newProduct.descricao !== 'string') return false;
  if (!newProduct.valor || typeof newProduct.valor !== 'number') return false;
  if (!newProduct.imagem || typeof newProduct.imagem !== 'string') return false;

  return true;
};

module.exports = {
  async getAllProductsServices() {
    const response = await getAllProductsModels();

    return response;
  },

  async addProductServices(newProduct) {
    const isValidProduct = isValid(newProduct);

    if (!isValidProduct) {
      return { statusCode: 400, message: 'Preencha os campos corretamente' };
    }

    const productExists = await getProductByName(newProduct.nome_produto);

    if (productExists[0]) {
      return { statusCode: 409, message: 'Produto já cadastrado' };
    }

    const { id } = await addProductModels(newProduct);

    return { id };
  },
};
