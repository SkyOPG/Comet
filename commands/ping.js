const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: {
        name: 'ping',
        description: 'returns the bot\'s ping'
    },
    async execute(client, message){
        await message.reply({ embeds: [
            new EmbedBuilder()
            .setTitle('ping')
            .setDescription('my ping is ' + client.ws.ping)
            .setColor(465724)
        ]})
    }
}