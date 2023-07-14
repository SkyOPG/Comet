const { model, Schema } = require('mongoose');

let FileSchema = new Schema({
    Filename: String,
    Owner: String,
    Views: Number,
    Forks: Number,
    FileData: {
        isPrivate: Boolean,
        Code: String
    }
})

module.exports = model("files", FileSchema);