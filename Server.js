const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const {hasPermission}=require("./permissions");

const app = express();

app.use(cors());


const server = http.createServer(app);


const io = new Server(server,{
    cors:{
        origin:"*"
    }
});


let rooms = {};


io.on("connection",(socket)=>{


console.log("User connected");


socket.on("join-room",(room,username)=>{


socket.to(room)
.emit(
"user-connected",
socket.id
);


if(!rooms[room])
rooms[room]=[];


rooms[room].push({
id:socket.id,
name:username
});


io.to(room).emit(
"users",
rooms[room]
);


});



socket.on("signal",(data)=>{

io.to(data.target)
.emit(
"signal",
{
sender:socket.id,
signal:data.signal
}
);

});



socket.on("disconnect",()=>{

for(let room in rooms){

rooms[room]=rooms[room]
.filter(
u=>u.id!==socket.id
);

io.to(room)
.emit(
"users",
rooms[room]
);

}

});


});


server.listen(3000,()=>{

console.log(
"KCRAFT Voice Server Running"
);

});
