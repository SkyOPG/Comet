const { EmbedBuilder } = require('discord.js')
const ping = 'ping'
const { name } = require('../discord.json')

module.exports = {
    data: {
        name: 'ping',
        description: 'returns the bot\'s ping'
    },
    async execute(client, message){
        await message.reply({ embeds: [
            new EmbedBuilder()
            .setTitle(ping)
            .setDescription('my ping is ' + client.ws.ping)
            .setFooter(name)
            .setColor(465724)
        ]})
    }
}