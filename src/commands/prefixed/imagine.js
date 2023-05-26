const deepai = require('deepai');
const { AttachmentBuilder } = require('discord.js')

module.exports = {
    data: {
        name: 'imagine',
        aliases: []
    },
    async execute(client, message, args){
        deepai.setApiKey('3be28f12-27a7-47da-9d7a-5e4184fd3970');

       var buffer = await deepai.callStandardApi("text2img", {
            text: "a potato"
    });

    const img = new AttachmentBuilder(buffer, 'image.png')

    message.send({ files: [img] })

    
    }
}