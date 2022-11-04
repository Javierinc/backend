
class ContenedorArchivo {
    
    constructor (path){
        this.container = []  
    }
    //Guarda productos
    save(product){
        this.container.push(product)
    }
    //Busca productos por Id
    getById(id){
        let search = this.container.find(e => e.id === id)
        return search === undefined ? undefined : search
    }
    
    //Muestra todos los productos 
    getAll(){
        return this.container.map(e => e,[])
    }
    //Elimina el producto por su Id
   deleteById(id){
        this.container.filter(e => e.id != id)
    }
}


module.exports = {ContenedorArchivo}
