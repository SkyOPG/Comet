const { model, Schema } = require('mongoose')


let eco = new Schema({
    User: String,
    Stars: Number,
    Tokens: Number,
    Password: String,
    Items: Array,
    Food: Number,
    Power: Number,
    Location: String,
    Badges: Array
})

module.exports = model('economySchema', eco)