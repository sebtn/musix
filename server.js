const express 		 = require('express')
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const path         = require('path');
const routes       = require('./routes');

const app = express()

const PORT = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'public')) )
	.use(cookieParser())
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use('/', routes)

app.listen(PORT, serverExpressFn = () => {
	console.log('Express is now running your port: ' + PORT)
})