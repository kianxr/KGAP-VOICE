let room =
localStorage.getItem("room");


document.getElementById("roomName")
.innerHTML =
"روم: "+room;



function mic(){

alert("میکروفون تغییر کرد 🎤");

}


function camera(){

alert("دوربین تغییر کرد 📷");

}


function screenShare(){

alert("Share Screen فعال شد 🖥️");

}


function windowShare(){

alert("Share Window فعال شد 🪟");

}


function leave(){

window.location.href="home.html";

}
function muteUser(){

socket.emit("mute-user",{

target:"ID_PLAYER",

role:"owner"

});

}
socket.on("users",(users)=>{


let box =
document.getElementById("users");


box.innerHTML="";


users.forEach(user=>{


box.innerHTML += `

<div class="user">

👤 ${user.name}

<br>

<span>
${user.role}
</span>


<button onclick="mute('${user.id}')">
🔇
</button>


<button onclick="kick('${user.id}')">
👢
</button>


</div>


`;

});


});
function mute(id){

socket.emit(
"mute-user",
{
target:id,
role:"owner"
}
);

}



function kick(id){

socket.emit(
"kick-user",
{
target:id,
role:"owner"
}
);

}
