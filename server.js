let express = require('express')
const PORT = process.env.PORT || 3000
let app = express()

app.use(express.static('public'))

app.listen(PORT, serverExpressFn = () => {
	console.log('Express is now running your port: ' + PORT)
})