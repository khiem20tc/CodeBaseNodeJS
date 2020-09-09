const mongoose = require('mongoose')
const { MONGO_URL } = require('../../environments')

const connectionOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
}

mongoose.Promise = global.Promise

mongoose.connect(MONGO_URL, connectionOptions)

mongoose.set('debug', true)

module.exports = { mongoose }