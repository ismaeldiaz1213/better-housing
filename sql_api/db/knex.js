const knex = require("knex");

const userKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "user_logins.db"
    }
});

const roomsKnex = knex({
    client: "sqlite3",
    connection: {
        filename: "rooms_data_db.db"
    }
});

module.exports = {
    userKnex,
    roomsKnex
};