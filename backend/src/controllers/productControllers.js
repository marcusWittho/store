const {
  getAllProductsServices,
  addProductServices,
  deleteProductServices,
  updateProductServices,
} = require('../services/productServices');

module.exports = {
  async getAllProductsControllers(req, res) {
    const response = await getAllProductsServices();

    return res.status(200).json(response);
  },

  async addProductControllers(req, res) {
    const { nome_produto: product, descricao, valor } = req.body;
    const imagem = req.file.path;

    const newProduct = {
      nome_produto: product,
      descricao,
      valor,
      imagem,
    };

    const addedProduct = await addProductServices(newProduct);

    if (addedProduct.statusCode) {
      return res
        .status(addedProduct.statusCode)
        .json({ message: addedProduct.message });
    }

    return res.status(201).json({ message: 'Produto adicionado com sucesso' });
  },

  async deleteProductControllers(req, res) {
    const { id } = req.params;

    const response = await deleteProductServices(id);

    return res.status(response.statusCode).json({ message: response.message });
  },

  async updateProductControllers(req, res) {
    const { nome_produto: product, descricao, valor } = req.body;
    const imagem = req.file.path;
    const { id } = req.params;

    const newProduct = {
      nome_produto: product,
      descricao,
      valor,
      imagem,
    };

    const response = await updateProductServices(id, newProduct);

    return res.status(200).json(response);
  },
};
