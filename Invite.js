const crypto = require("crypto");

function generateInvite() {
    return crypto.randomBytes(4).toString("hex").toUpperCase();
}

module.exports = {
    generateInvite
};
