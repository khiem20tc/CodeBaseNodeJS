require('dotenv').config()

//Application
const PORT = process.env.PORT || 5000

//Database
const DATABASE_NAME = process.env.DATABASE_NAME || 'APIdemo'
const MONGO_URL = process.env.MONGO_URL || `mongodb+srv://khiem20tc:01239335976@cluster0.licvf.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`

//Jsonwebtoken
const PRIVATE_KEY = process.env.PRIVATE_KEY || 'huukhiem'

//bycrypt
const SALT = process.env.SALT || 10

module.exports = {
    PORT,
    DATABASE_NAME,
    MONGO_URL,
    PRIVATE_KEY,
    SALT
}