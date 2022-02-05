const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/employee')
const con = mongoose.connection

const usersSchema = new mongoose.Schema({
    name : String,
    phone : String,
    email : String,
    job_title : String,
    password : String
})

const Model = mongoose.model('users', usersSchema)

module.exports = Model