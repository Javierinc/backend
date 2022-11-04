const express = require('express');
const {controller} = require('../controllers/controllers.js');



const productsRouter = express.Router();

productsRouter.post('/api/productos', controller.postProduct);
productsRouter.get('/api/productos', controller.getAllProducts);
productsRouter.get('/api/productos/:id', controller.getProductByID);
productsRouter.put('/api/productos/:id', controller.putProduct);
productsRouter.delete('/api/productos/:id', controller.deleteProduct);

exports.productsRouter = productsRouter;