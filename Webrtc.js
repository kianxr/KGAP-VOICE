const peers = {};

let localStream;


const socket = io("http://localhost:3000");


const username =
localStorage.getItem("username");

const room =
localStorage.getItem("room");



// گرفتن میکروفون

navigator.mediaDevices.getUserMedia({
    audio:true,
    video:false
})
.then(stream=>{

    localStream = stream;


    socket.emit(
        "join-room",
        room,
        username
    );

});




// وقتی کاربر جدید وارد شد

socket.on("user-connected", id=>{


createPeer(id);


});





function createPeer(id){


const peer =
new RTCPeerConnection({

iceServers:[
{
urls:"stun:stun.l.google.com:19302"
}
]

});



peers[id]=peer;



localStream
.getTracks()
.forEach(track=>{

peer.addTrack(
track,
localStream
);

});




peer.onicecandidate =
event=>{


if(event.candidate){

socket.emit(
"signal",
{
target:id,
signal:{
candidate:event.candidate
}
}
);

}

};




peer.createOffer()
.then(offer=>{

return peer.setLocalDescription(offer);

})
.then(()=>{


socket.emit(
"signal",
{
target:id,
signal:{
sdp:peer.localDescription
}
}
);


});


}





// دریافت سیگنال‌ها


socket.on("signal",
async data=>{


let peer =
peers[data.sender];



if(!peer){

createPeer(data.sender);

peer=peers[data.sender];

}



if(data.signal.sdp){


await peer.setRemoteDescription(
data.signal.sdp
);


if(data.signal.sdp.type==="offer"){


let answer =
await peer.createAnswer();


await peer.setLocalDescription(
answer
);



socket.emit(
"signal",
{
target:data.sender,
signal:{
sdp:peer.localDescription
}
}
);


}


}



if(data.signal.candidate){


await peer.addIceCandidate(
data.signal.candidate
);


}


});
socket.on("muted",()=>{

let mic =
localStream.getAudioTracks()[0];

mic.enabled=false;

});
