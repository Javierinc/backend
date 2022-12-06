const createKnexClient = require("knex");
const {option} = require("./options/config.js");

const sqlClient = createKnexClient(option);

module.exports = {sqlClient}