function changeRole(){

let username =
document.getElementById("targetUser").value;


let role =
document.getElementById("role").value;


socket.emit(
"change-role",
{
username:username,
role:role
}
);


document.getElementById("result")
.innerHTML =
"نقش تغییر کرد ✅";

}
