require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser').json();

const errors = require('./src/middlewares/errors');

const app = express();
const PORT = process.env.SERVER || 3000;

app.use(bodyParser);
app.use(cors());

const usersRoutes = require('./src/routes/userRoutes');
const productsRoutes = require('./src/routes/productRoutes');

app.use('/user', usersRoutes);
app.use('/product', productsRoutes);

app.all('*', (req, res) => res.status(404)
  .json({ message: `Ops... a rota ${req.path} não existe.` }));

app.use(errors);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
