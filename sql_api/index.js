//node offers file-based scope - variables in this file only exist in this file 
//require is a command that allows us to access files from other folders 
const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const db = require("./db/users");
const rooms = require("./db/rooms");

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post("/users", async(req,res) => {
    const results = await db.createUser(req.body);
    //to read req.body, we need bodyParser 
    //express is unable to innately read files 
    try{
        res.status(201).json({user_id: results[0] });
        //outputs the id value and sends a success code if the user id is caught 
    } catch {
        res.status(500).json({error: "failed to create user"}); 
    }
    
    //status 201 indicates created 
}

)

//need to run localhost:1337/users in the browser 
app.get("/users", async (req, res) => {
    const users = await db.getAllUsers();
    res.status(200).json({users});
});

//updating mechanism
app.patch("/users/:net_id", async (req, res) => {
    const net_id = await db.updateUser(req.params.net_id, req.body)
});

// GET all rooms
app.get("/rooms", async (req, res) => {
    const roomsData = await rooms.getAllRooms();
    res.status(200).json({roomsData});
});


app.get("/rooms/:room_id", async (req, res) => {
    const room = await rooms.getRoomById(req.params.room_id);
    res.status(200).json(room);
});


app.patch("/rooms/:room_id", async (req, res) => {
    const room = await rooms.updateRoom(req.params.room_id, req.body);
    res.status(200).json(room);
});


app.post("/rooms", async (req, res) => {
    try {
        const results = await rooms.createRoom(req.body);
        res.status(201).json({ room_id: results[0] });
    } catch (error) {
        res.status(500).json({ error: "Failed to create room" });
    }
});

app.listen(8000, () => console.log("server is running on port 8000"));