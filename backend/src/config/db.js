const config = require('../../knexfile');
// eslint-disable-next-line import/order
const knex = require('knex')(config);

module.exports = knex;
