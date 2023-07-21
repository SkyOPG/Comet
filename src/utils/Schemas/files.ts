import mongo from 'mongoose';
const { model, Schema } = mongo;

let fileSchema = new Schema({
    Filename: String,
    Owner: String,
    Views: Number,
    Forks: Number,
    FileData: {
        isPrivate: Boolean,
        Code: String
    }
})

const SchemaModel = model('files', fileSchema);

export default {
    model: SchemaModel,
    create: async (model: any, owner: any, file: string): Promise<void> => {
        await model.create({
            Filename: file,
            Owner: owner,
            Views: 0,
            Forks: 0,
            FileData: {
                isPrivate: false,
                Code: ""
            }
        })
    },
    delete: async (model: any, owner: any, file: string): Promise<void> => {
        await model.deleteOne({
            Owner: owner,
            Filename: file
        });
    }
}