import mongo from 'mongoose';
const { model, Schema } = mongo;

let eco = new Schema({
    User: String,
    Stars: Number,
    Tokens: Number,
    Food: Number,
    Power: Number,
    Badges: Array,
    Multi: Number,
    Level: Number
})

const SchemaModel = model('economySchema', eco);

export default {
    model: SchemaModel,
    create: (model: any, user: any): void => {
        model.create({
            User: user.id,
            Stars: 0,
            Tokens: 0,
            Food: 100,
            Power: 100,
            Badges: new Array(),
            Multi: 1,
            Level: 0
        })
    },
    delete: async (model: any, user: any) => {
        await model.deleteOne({
            User: user.id
        });
    }
}