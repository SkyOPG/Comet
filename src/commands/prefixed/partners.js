const { EmbedBuilder } = require('discord.js')

module.exports = {
    category: 'info',
    data: {
        name: 'partners',
        aliases: []
    },
    async execute(client, message, args){
        const embed = new EmbedBuilder()
        .setTitle('Comet\'s Partners')
        .setDescription('[Gemmy](https://gemmyxyz.polaristara.repl.co) - TDK')
        .setColor('Blue')

        message.channel.send({ embeds: [embed] })
    }
}