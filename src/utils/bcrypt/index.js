const { hash, compare } = require('bcrypt')

const { SALT } = require('../../environments')

/**
 * This function hash password using bcrypt
 * @param password - string
 * @return password after hash - string
**/
const hashPassword = async (password) => {
    return await hash(password, SALT)
}

/**
 * This function compare password and hash using bcrypt
 * @param password - string
 * @param hashPassword - string
 * @return boolean compare password and hash
**/

const comparePassword = async (password, hashPassword) => {
    return await compare(password, hashPassword)
}

module.exports = {
    hashPassword,
    comparePassword
}