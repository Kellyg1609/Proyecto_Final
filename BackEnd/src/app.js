const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = process.env.PORT  || 5000

dotenv.config

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())



app.listen(port,() => console.log('Ejecutando en el puerto:'),port)


