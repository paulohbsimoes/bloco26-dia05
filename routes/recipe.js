const express = require('express');
const route = express.Router();
const middleware = require('../middlewares');

route.delete('/:id', middleware.recipe.deleteById);

module.exports = route;
