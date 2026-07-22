let username =
localStorage.getItem("username");


if(!username){

window.location.href="index.html";

}


document.getElementById("welcome")
.innerHTML =
"سلام "+username+" 👋";



function joinRoom(room){

localStorage.setItem(
"room",
room
);


window.location.href =
"room.html";

}



function createRoom(){

let name =
prompt("اسم روم را وارد کنید:");

if(name){

alert(
"روم "+name+" ساخته شد"
);


}

}
