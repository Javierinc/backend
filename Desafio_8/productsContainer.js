
class ProductsContainer {

    constructor (mysqlClient, table){
        this.client = mysqlClient; 
        this.table = table;
    }
    //Guarda los chats
    async save(product){
        await this.client(this.table).insert(product);
        return true;
    }
    //Muestra todos los chats 
    async getAll(){
        try{
            return await this.client(this.table).select();
        }catch (error){
            throw error
        }
    }
}


module.exports = {ProductsContainer}