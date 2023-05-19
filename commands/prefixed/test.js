const { AttachmentBuilder } = require('discord.js')
const { profileImage } = require('meta-discord')

module.exports = {
    data: {
        name: 'profile'
    },
    async execute(client, message, args){

        const user = message.user.id
        const status = message.user.presence.status

        const buffer = profileImage(user, {
            usernameColor: '#d9dfef',
            borderColor: ['#f90257', '#043a92'],
            presenceStatus: status
           });

           const image = new AttachmentBuilder(buffer, { name: 'profile.png' });

        await message.reply({ files: [image] })
    }
}