const express = require('express');
const path = require('path');
const app = express();

const { PORT } = require('./environments')
const { mongoose } = require('./helpers')

const UserRoute = require('./routes/user')

// connected mongo database
mongoose.connection.on('error', () => {
	console.log('❌  error occurred from the mongo database')
})
mongoose.connection.once('open', () =>
	console.log('🌨  Connected successfully to mongo database')
)

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname,'public')));

app.use('/user', UserRoute);

app.listen(PORT, () => {console.log(`Server is running on ${PORT}...`)});