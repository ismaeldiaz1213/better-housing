const { roomsKnex } = require("./knex");

function getAllRooms() {
    return roomsKnex("rooms_data_tb").select("*");
}

function getRoomById(room_id) {
    return roomsKnex("rooms_data_tb").where({ room_id }).first();
}

function createRoom(room) {
    return roomsKnex("rooms_data_tb").insert(room, ["room_id"]);
}

function updateRoom(room_id, changes) {
    return roomsKnex("rooms_data_tb")
        .where({ room_id })
        .update(changes)
        .then(() => {
            return getRoomById(room_id);
        });
}

module.exports = {
    getAllRooms,
    getRoomById,
    createRoom,
    updateRoom
};

