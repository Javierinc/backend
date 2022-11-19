const fs = require('fs')

class MessagesContainer {
    #container
    #path
    constructor (path){
        this.#container = []  
        this.#path = path
    }
    //Guarda los chats
    async save(product){
        this.#container.push(product)
        await fs.promises.writeFile(this.#path, JSON.stringify(this.#container))
    }
    //Muestra todos los chats 
    async getAll(){
        try {
            this.#container = JSON.parse(await fs.promises.readFile(this.#path, 'utf-8'))
            return this.#container.map(e => e,[])
            
        } catch (error){
            throw error
        }
    }
}


module.exports = {MessagesContainer}