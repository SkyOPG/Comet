import { model, Schema } from 'mongoose';

let levelschema = new Schema({
    Guild: String,
    User: String,
    XP: Number,
    Level: Number,
    Background: String,
    FullXP: Number,
    SaveXP: Boolean,
    Enabled: Boolean
});

export default model('levels', levelschema);