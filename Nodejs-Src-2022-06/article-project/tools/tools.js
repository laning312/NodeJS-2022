const crypto = require('crypto'); // crypto是node.js内置加密模块
function cryptPwd(password) {
    let md5 = crypto.createHash('md5');
    return md5.update(password).digest('hex');
}

module.exports = {
    cryptPwd
}