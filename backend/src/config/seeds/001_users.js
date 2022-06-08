exports.seed = async (knex) => {
  await knex('cadastro_usuario').del();

  await knex('cadastro_usuario').insert([
    {
      id: 1,
      uuid: 'aa11',
      nome_usuario: 'User_01',
      tipo_usuario: 'Tipo_01',
      password: 'aaa111',
      password_iv: 'aaa111',
      email: 'user_01@email.com',
    },
    {
      id: 2,
      uuid: 'bb22',
      nome_usuario: 'User_02',
      tipo_usuario: 'Tipo_02',
      password: 'bbb222',
      password_iv: 'bbb222',
      email: 'user_02@email.com',
    },
  ]);
};
