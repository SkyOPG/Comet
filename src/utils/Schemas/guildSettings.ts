// this can update...
import mongo from 'mongoose';
const { model, Schema } = mongo;

let settings = new Schema({
    Guild: String,
    leveling: {
        enabled: Boolean,
        channel: String
    }
})

const SchemaModel = model('configSchema', settings);

export default {
    model: SchemaModel,
    create: async (model: any, guild: any): Promise<void> => {
        await model.create({
            Guild: guild.id,
            leveling: {
                enabled: false,
                channel: "none"
            }
        })
    },
    delete: async (model: any, guild: any): Promise<void> => {
        await model.deleteOne({
            Guild: guild.id
        });
    }
}