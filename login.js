function login(){

    let username =
    document.getElementById("username").value;


    if(username.trim() === ""){
        alert("نام کاربری وارد کنید");
        return;
    }


    localStorage.setItem(
        "username",
        username
    );


    window.location.href =
    "home.html";

}
