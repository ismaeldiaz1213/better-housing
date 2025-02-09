const knex = require("knex");

const connectedKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "user_logins.db"
    }
})

module.exports = connectedKnex;