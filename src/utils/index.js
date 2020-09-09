const { generateToken, verifyToken } = require('./jsonwebtoken')
const { hashPassword, comparePassword } = require('./bcrypt')

module.exports = {
    generateToken,
    verifyToken,
    hashPassword,
    comparePassword,
}