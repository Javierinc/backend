const {option} = require("../options/config.js");
const knex = require("knex")(option);

knex.schema.createTable('products', table => {
    table.increments('id')
    table.string('name')
    table.integer('price')
    table.string('thumbnail')
})
    .then(()=> console.log("table created"))
    .catch((err) => {console.log(err); throw err})
    .finally(() => {
        knex.destroy()
    })