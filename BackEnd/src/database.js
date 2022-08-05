const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const uri = process.env.MONGO_ATLAS

mongoose.connect(uri,{useUnifiedTopology: true})
    .then(() => console.log('Conectado a la BD'))
    .catch((error) => console.log(error))