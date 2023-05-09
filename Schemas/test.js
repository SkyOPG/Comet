const { model, Schema } = require('mongoose')

let skee = new Schema({
    GuildId: String,
    UserId: String
})

module.exports = model('test', skee)