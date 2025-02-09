const knex = require("./knex");

function createUser(user){
    return knex("user_table").insert(user);
}

function getAllUsers(){
    return knex("user_table").select("*");
}

function deleteUser(net_id){
    return knex("user_table").where("net_id", net_id).del();
}

function updateUser(net_id, user){
    return knex("user_table").where("net_id", net_id).update(user);
}

module.exports = {
    createUser, 
    getAllUsers,
    deleteUser,
    updateUser
};