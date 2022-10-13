class Contenedor {
    constructor (){
        this.contenedor = []        
    }
    //Guarda productos
    save(producto){
        this.contenedor.push(producto)
    }
    //Busca productos por Id
    getById(id){
        let search = this.contenedor.find(e => e.id === id)
        return search === undefined ? null : search
    }
    //Muestra todos los productos que están en el contenedor 
    getAll(){
        return this.contenedor.map(e => e,[])
    }
    //Elimina el producto por su Id
    deleteById(id){
        this.contenedor = this.contenedor.filter(e => e.id != id) 
    }

    //Elimina todos los productos del contenedor
    deleteAll(){
        this.contenedor = []
    }
}
//Productos
const zapatillas = {
    id: 1,
    name: 'Jordan',
    prince: 39949,
    thumbnail: 'https://i.ibb.co/nCKcTQG/buddha.png'
}
const buzo = {
    id: 2,
    name: 'Nike',
    price: 399900,
    thumbnail: 'https://i.ibb.co/nCKcTQG/buddha.png'
}
const cinturon = {
    id: 3,
    name: 'Balenciaga',
    price: 45900,
    thumbnail: 'https://i.ibb.co/nCKcTQG/buddha.png'
}
const gorra = {
    id: 4,
    name: 'Adidas',
    price: 82900,
    thumbnail: 'https://i.ibb.co/nCKcTQG/buddha.png'
}

//Instanciación de clase Contenedor
const streetwear = new Contenedor()

streetwear.save(zapatillas)
streetwear.save(buzo)
streetwear.save(cinturon)
streetwear.save(gorra)
console.log(streetwear.getAll())
console.log(streetwear.getById(3))
streetwear.deleteById(3)
console.log(streetwear.getById(3))
console.log(streetwear.getAll())
streetwear.deleteAll()
console.log(streetwear.getAll())

