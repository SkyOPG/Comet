const { EmbedBuilder } = require('discord.js')
const ping = 'ping'
const { name } = require('../../discord.json')

module.exports = {
    data: {
        name: 'ping'
    },
    async execute(message, client){
        await message.reply({
            embeds: [
                new EmbedBuilder()
                .setName(ping)
                .setDescription('my ping is ' + client.ws.ping)
                .setFooter(name)
            ]
        })
    }
}