require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser').json();

const app = express();
const PORT = process.env.SERVER || 3000;

app.use(bodyParser);

const usersRoutes = require('./src/routes/userRoutes');

app.use('/user', usersRoutes);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
