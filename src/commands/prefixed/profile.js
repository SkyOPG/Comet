const { AttachmentBuilder } = require('discord.js')
const meta = require('meta-discord')

module.exports = {
    data: {
        name: "profile",
        aliases: []
    },
    async execute(client, message, args){
        console.log(message.mentions)

        if(ide === '849283841583743036'){
            const buffer = await meta.profileImage(ide, {
                customTag: "Developer",
                customBackground: "https://cdn.discordapp.com/attachments/1128049815541010524/1128456921322618951/clyde-rs-4XbZCfU2Uoo-unsplash.jpg",
                usernameColor: '#d9dfef',
                customBadges: ['https://cdn.discordapp.com/attachments/1081881878304395374/1109253298021744660/skull.png', 'https://cdn.discordapp.com/attachments/1081881878304395374/1109424148196884520/7088-early-verified-bot-developer.png', 'https://cdn.discordapp.com/attachments/1081881878304395374/1109424250605015071/3721-verified.png'],
                borderColor: ['#4a9edf', '#4275b7']
               });
               const image = new AttachmentBuilder(buffer, { name: 'profile.png' });

               await message.edit({ files: [image] })
                } else if(ide === client.user.id){
                    const buffer = await meta.profileImage(ide, {
                        customTag: "Comet",
                        usernameColor: '#d9dfef',
                        customBadges: ["https://cdn.discordapp.com/attachments/1081881878304395374/1109424250605015071/3721-verified.png"],
                        borderColor: ['#4a9edf', '#4275b7']
                       });
                       const image = new AttachmentBuilder(buffer, { name: 'profile.png' });
    
                       await message.editReply({ files: [image] })
                } else {
                    const buffer = await meta.profileImage(ide, {
                        customTag: "User",
                        usernameColor: '#d9dfef',
                        borderColor: ['#4a9edf', '#4275b7']
                       });
                       const image = new AttachmentBuilder(buffer, { name: 'profile.png' });
    
                       await message.editReply({ files: [image] })
                }
            }
        }