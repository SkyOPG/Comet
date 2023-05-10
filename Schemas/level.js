const { model, Schema } = require('mongoose')

let levelschema = new Schema({
    Guild: String,
    User: String,
    XP: Number,
    Level: Number,
    Background: String,
    FullXP: Number,
    SaveXP: Boolean,
    Enabled: Boolean
})

module.exports = model('levels', levelschema)