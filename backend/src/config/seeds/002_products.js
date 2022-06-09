exports.seed = async (knex) => {
  await knex('cadastro_produto').del();

  await knex('cadastro_produto').insert([
    {
      nome_produto: 'Prod_1',
      descricao: 'Prod_1',
      valor: 100.0,
      imagem: 'aaaaaaa',
    },
    {
      nome_produto: 'Prod_2',
      descricao: 'Prod_2',
      valor: 200.0,
      imagem: 'bbbbbbb',
    },
  ]);
};
