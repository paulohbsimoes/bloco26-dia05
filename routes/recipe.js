const express = require('express');
const route = express.Router();
const middleware = require('../middlewares');

route.delete('/:id', middleware.recipe.deleteById);

route.put('/:id', middleware.recipe.updateById);

module.exports = route;
