const fs = require("fs");

let users =
require("./users.json");


function getRole(username){

    if(users[username]){
        return users[username].role;
    }

    return "member";

}



function setRole(username,role){

    users[username]={
        role:role
    };


    fs.writeFileSync(
        "./users.json",
        JSON.stringify(users,null,4)
    );

}


module.exports={
    getRole,
    setRole
};
