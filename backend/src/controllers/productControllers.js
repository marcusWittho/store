const {
  getAllProductsServices, addProductServices,
} = require('../services/productServices');

module.exports = {
  async getAllProductsControllers(req, res) {
    const response = await getAllProductsServices();

    return res.status(200).json(response);
  },

  async addProductControllers(req, res) {
    const {
      nome_produto: product, descricao, valor, imagem,
    } = req.body;

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
};
