const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(()=>{
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

// https://www.youtube.com/watch?v=HJGWu0cZUe8
// https://sequelize.org/docs/v6/advanced-association-concepts/advanced-many-to-many/

// how is the model being created not calling in server file?
// what is this for ? const { findByPk } = require('../../models/Product');

// to run seeds npm run seeds
// validate cateogry are we adding data?
// check product post and update 