# Projeto Store

Para testar o projeto:

 - Criar um banco de dados mysql

 - Um arquivo .env com a seguinte estrutura:
  DB_HOST=...
  PORT=...
  SERVER=...
  DB_NAME=...
  DB_USER=...
  DB_PASS=...
  CRYPTO_SECRET=...

Na pasta backend.
 - Criar as tabelas de usuários e produtos com o seguinte comando:
   - npx knex migrate:latest

 - Adicionar alguns dados para testar o banco:
   - npx knex seed:run

 - Para iniciar o servidor:
   - npm start

Na pasta frontend.
 - Para iniciar a aplicação:
   - npm start

(o projeto ainda não está completo, mas é possível testar algumas funcionalidades
como adicionar usuários e produtos ao DB e fazer login)
