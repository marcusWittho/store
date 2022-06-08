exports.up = (knex) => knex.schema.createTable('cadastro_usuario', (table) => {
  table.increments('id').primary();
  table.uuid('uuid').notNull().unique();
  table.string('nome_usuario', [250]).notNull();
  table.string('tipo_usuario', [250]).notNull();
  table.string('password', [250]).notNull();
  table.string('password_iv', [250]).notNull();
  table.string('email', [100]).notNull().unique();
  table.timestamp('created_at').defaultTo(knex.fn.now());
  table.timestamp('updated_at').nullable().defaultTo(null);
  table.timestamp('deleted_at').nullable().defaultTo(null);
  table.string('reset_password_token', [100]).nullable().defaultTo(null);
});

exports.down = (knex) => knex.schema.dropTable('cadastro_usuario');
