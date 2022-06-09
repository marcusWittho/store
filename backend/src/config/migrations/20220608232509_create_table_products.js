exports.up = (knex) => knex.schema.createTable('cadastro_produto', (table) => {
  table.increments('id').primary();
  table.uuid('uuid').notNull().defaultTo(knex.raw('(UUID())'));
  table.string('nome_produto', [250]).notNull();
  table.string('descricao', [250]).notNull();
  table.decimal('valor').notNull();
  table.string('imagem', [250]).notNull();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').nullable().defaultTo(null);
  table.timestamp('deleted_at').nullable().defaultTo(null);
});

exports.down = (knex) => knex.schema.dropTable('cadastro_produto');
