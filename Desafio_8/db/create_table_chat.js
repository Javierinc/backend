const {option} = require("../options/config.js");
const knex = require("knex")(option)

knex.schema.createTable('chats', table => {
    table.increments('id')
    table.string('sender')
    table.string('content')
    table.string('date')
 }) 
    .then(()=> console.log("table created"))
    .catch((err) => {console.log(err); throw err})
    .finally(()=> {
        knex.destroy();
    })