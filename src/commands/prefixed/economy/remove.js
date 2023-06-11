const { EmbedBuilder } = require('discord.js')
const economy = require('../../../Schemas/economy')

module.exports = {
    category: 'economy',
    data: {
        name: 'remove',
        aliases: ['rm']
    },
    async execute(client, message, args){
        const data = await economy.findOne({ User: message.author.id })
        if(args.length <= 0) return message.channel.send({ embeds: [
            new EmbedBuilder().setTitle('Error').setDescription("you didn't specify enough arguments\n```c!remove <password> / c!rm <password>```").setColor('Red')
        ]});

        const msg = await message.channel.send('Please Wait...')

        if(!data) return msg.edit({ content: '', embeds: [
            new EmbedBuilder().setTitle('Error').setDescription("You don't have an account yet").setColor('Red')
        ] })
        if(data){
            const check = data.Password
            if(check === args[0]){
                await economy.findOneAndDelete({ User: message.author.id });
                msg.edit({ content: '', embeds: [
                    new EmbedBuilder().setTitle('Deleted').setDescription("All your data has been Deleted sucessfully!").setColor('Green')
                ] })
            } else {
                return msg.edit({ content: '', embeds: [
                    new EmbedBuilder().setTitle('Error').setDescription('A wrong password Was provided').setColor('Red')
                ] })
            }
        }
    }
}