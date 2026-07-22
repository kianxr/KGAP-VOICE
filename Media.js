let localStream;

let micEnabled = true;
let cameraEnabled = false;


async function startMedia(){

    localStream = await navigator.mediaDevices.getUserMedia({
        audio:true,
        video:false
    });

    document.getElementById("status")
    .innerHTML = "🟢 متصل";

}


function toggleMic(){

    let audio =
    localStream.getAudioTracks()[0];


    micEnabled = !micEnabled;


    audio.enabled = micEnabled;


    if(micEnabled)
        alert("🎤 میکروفون روشن شد");
    else
        alert("🔇 میکروفون خاموش شد");

}



async function toggleCamera(){


    if(!cameraEnabled){


        let video =
        await navigator.mediaDevices.getUserMedia({
            video:true
        });


        let track =
        video.getVideoTracks()[0];


        localStream.addTrack(track);


        cameraEnabled=true;


        alert("📷 دوربین روشن شد");


    }else{


        let track =
        localStream.getVideoTracks()[0];


        if(track)
        track.stop();


        cameraEnabled=false;


        alert("📷 دوربین خاموش شد");


    }

}





async function shareScreen(){


let screen =
await navigator.mediaDevices.getDisplayMedia({
    video:true
});


let track =
screen.getVideoTracks()[0];


alert("🖥️ Share Screen فعال شد");


track.onended=function(){

alert("Share Screen قطع شد");

};


}
