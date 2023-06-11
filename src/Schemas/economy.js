const { model, Schema } = require('mongoose')


let eco = new Schema({
    User: String,
    Stars: Number,
    Tokens: Number,
    Password: String,
    Items: {
        Collectables: {
            Common: Array,
            Uncommon: Array,
            Rare: Array,
            RarePlus: Array,
            Legenedary: Array,
            Space: Array,
            SpacePlus: Array,
            Universe: Array
        },
        Sellables: {
            Common: Array,
            Uncommon: Array,
            Rare: Array,
            RarePlus: Array,
            Legenedary: Array,
            Space: Array,
            SpacePlus: Array,
            Universe: Array
        }
    },
    Food: Number,
    Power: Number,
    Location: String,
    Badges: Array,
    Multi: Number,
    Level: Number
})

module.exports = model('economySchema', eco)