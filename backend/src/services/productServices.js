const {
  getAllProductsModels,
  addProductModels,
  getProductByName,
  deleteProductModels,
  updateProductModels,
} = require('../models/productModels');

const isValid = (newProduct) => {
  if (!newProduct.nome_produto || typeof newProduct.nome_produto !== 'string') return false;
  if (!newProduct.descricao || typeof newProduct.descricao !== 'string') return false;
  if (!newProduct.valor || typeof newProduct.valor !== 'string') return false;
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

  async deleteProductServices(id) {
    if (!id) return false;

    const response = await deleteProductModels(id);

    return response;
  },

  async updateProductServices(id, productUpdated) {
    const response = await updateProductModels(id, productUpdated);

    return response;
  },
};
