require('dotenv').config()
const express = require('express')
const cors = require('cors')
const server = express()

const {PORT} = process.env


server.use(express.json())
server.use(cors())



//! Endpoints below



server.listen(PORT, () => console.log(`Server running on ${PORT}`))