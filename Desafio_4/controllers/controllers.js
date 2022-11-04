const { randomUUID } = require('crypto');
const {ContenedorArchivo} = require('../container.js');

const controller = {}

const product = new ContenedorArchivo();


controller.postProduct = ( req, res ) => {
   const newProduct = req.body;
   newProduct.id = randomUUID();
   product.save(newProduct);
   res.json(newProduct);
}

controller.getProductByID = ( {params: {id}}, res ) => {
   const search = product.getById(id);
   if(!search){
      res.status(404);
      res.json({message: `We couldn't find a product with this id: ${id}`})
   }else{
      res.json(search);
   }
}

controller.getAllProducts = (req, res) => {
   res.json(product.getAll());
}

controller.putProduct = ( {body, params: {id} }, res) => {
   const index = product.container.findIndex(e => e.id === id);
   if(index === -1){
      res.status(404);
      res.json({message: `We couldn't find a product with this id: ${id}`})
   }else{
      product.container[index] = body
      res.json(body);
   }
}

controller.deleteProduct = ({params: {id}}, res) => {
   const index = product.container.findIndex(e => e.id === id);
   if(index === -1){
      res.status(404);
      res.json({message: `We couldn't find a product with this id: ${id}`})
   }else{
      product.container.splice(index, 1);
      res.send();
   }
}

module.exports = {controller}