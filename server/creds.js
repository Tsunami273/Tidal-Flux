var user = '' || process.env.USER_NAME
var pass = '' || process.env.USER_PASSWORD
var email = '' || process.env.EMAIL_ADDRESS
var epass = '' || process.env.EMAIL_PASSWORD
var mdburi = '' || process.env.MONGODB_URI

module.exports.user = user
module.exports.pass = pass
module.exports.email = email
module.exports.epass = epass
module.exports.mdburi = mdburi
