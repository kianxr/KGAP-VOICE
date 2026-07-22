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
