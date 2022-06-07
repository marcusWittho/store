const connection = require('../config/db');

connection('users').then((data) => {
  console.log(data);
});
