const express = require('express');
const {controller} = require('../controllers/webControllers.js')

const webRouter = express.Router();

webRouter.get('/', controller.getRoot);

webRouter.post('/products', controller.postProducts)

webRouter.get('/products', controller.getProducts)


module.exports = {webRouter}
