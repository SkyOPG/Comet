const { model, Schema } = require('mongoose')

let user = new Schema({
    ip: String,
    id: String,
    guilds: Array
})

module.exports = model('userSchema', user)