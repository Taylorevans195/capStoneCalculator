const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('public'))
const {saveEquation} = require('./controller.js')
const {getHomePage} = require('./fileSender.js')
app.get('/', getHomePage)
app.post('/Save', saveEquation)




app.listen(4000, console.log('server running on 4000'))