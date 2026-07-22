const roles = {

    owner: {
        createRoom:true,
        deleteRoom:true,
        muteAll:true,
        kick:true,
        ban:true,
        move:true,
        stopScreen:true
    },


    admin:{
        createRoom:true,
        deleteRoom:false,
        muteAll:true,
        kick:true,
        ban:true,
        move:true,
        stopScreen:true
    },


    moderator:{
        createRoom:false,
        deleteRoom:false,
        muteAll:false,
        kick:true,
        ban:true,
        move:true,
        stopScreen:true
    },


    member:{
        createRoom:false,
        deleteRoom:false,
        muteAll:false,
        kick:false,
        ban:false,
        move:false,
        stopScreen:false
    }

};


function hasPermission(role,permission){

    return roles[role]?.[permission] || false;

}


module.exports={
    roles,
    hasPermission
};
