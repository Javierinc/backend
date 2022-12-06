
class MessagesContainer {

    constructor (mysqlClient, table){
        this.client = mysqlClient; 
        this.table = table;
    }
    //Guarda los chats
    async save(message){
        await this.client(this.table).insert(message);
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


module.exports = {MessagesContainer}