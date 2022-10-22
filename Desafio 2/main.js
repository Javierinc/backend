//Importación de la clase Contenedor
const { ContenedorArchivo } = require('./container')
//Importación de productos
const {zapatillas, buzo, cinturon, gorra}= require('./products')
// Función para probar el código
const test = async ()=>{
    const products = new ContenedorArchivo('./db.txt')
    //Guarda productos
    await products.save(zapatillas)
    await products.save(buzo)
    await products.save(cinturon)
    await products.save(gorra)
    //Muestra todos los productos
    console.log(await products.getAll())
    //Muestra producto por Id
    console.log(await products.getById(2))
    console.log(await products.getById(6))
    //Elimina producto por Id
    await products.deleteById(2)
    //Elimina todos los productos
    await products.deleteAll()
    console.log(await products.getAll())
}

test()