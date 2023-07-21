import { model, Schema } from 'mongoose';

let levelschema = new Schema({
    Guild: String,
    User: String,
    XP: Number,
    Level: Number,
    Background: String,
    FullXP: Number
});

const SchemaModel = model('levels', levelschema);

export default {
    model: SchemaModel,
    create: (model: any, user: any, guild: any): void => {
        model.create({
            Guild: guild.id,
            User: user.id,
            XP: 0,
            Level: 0,
            Background: "https://cdn.discordapp.com/attachments/1081881878304395374/1105849988292030598/1232869.jpg",
            FullXP: 0
        })
    },
    delete: async (model: any, user: any, guild: any) => {
        await model.deleteOne({
            Guild: guild.id,
            User: user.id
        });
    }
}