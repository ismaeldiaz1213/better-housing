const { userKnex } = require("./knex");

function createUser(user){
    return userKnex("user_table").insert(user);
}

function getAllUsers(){
    return userKnex("user_table").select("*");
}

function deleteUser(net_id){
    return userKnex("user_table").where("net_id", net_id).del();
}

function updateUser(net_id, user){
    return userKnex("user_table").where("net_id", net_id).update(user);
}

module.exports = {
    createUser, 
    getAllUsers,
    deleteUser,
    updateUser
};