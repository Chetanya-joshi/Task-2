const mongoose = require('mongoose');
require('dotenv').config({path : './.env'})
const db = process.env.MONGODB;

module.exports = mongoose.connect(db)
.then(()=>{
    console.log("Connected Successfully")
}).catch((err)=>{
    console.log(err);
})