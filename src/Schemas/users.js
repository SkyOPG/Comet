const { model, Schema } = require('mongoose')

let users = new Schema({
     UserId: String,
     UserName: String,
     Tag: String,
     User: String,
     Id: String,
     Pass: String,
     Enabled: Boolean,
     Logged: Boolean
})