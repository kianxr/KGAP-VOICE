const socket =
io("http://localhost:3000");


let username =
localStorage.getItem("username");


let room =
localStorage.getItem("room");



let stream;


navigator.mediaDevices
.getUserMedia({
audio:true,
video:false
})
.then(s=>{


stream=s;


socket.emit(
"join-room",
room,
username
);


});
