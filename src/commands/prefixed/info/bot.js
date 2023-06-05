const { EmbedBuilder } = require('discord.js')

module.exports = {
    category: 'info',
    data: {
        name: 'bot',
        aliases: []
    },
    async execute(client, message, args){
        const embed = new EmbedBuilder()
        .setTitle('Comet Info')
        .setDescription('Comet is a bot made by thesky#0001')
        .addFields({ name: 'Slash Commands', value: `\`${client.commands.size}\``, inline: true },
        { name: 'Prefix Commands', value: `\`${client.cmdsPrefixed.size}\``, inline: true },
        { name: 'Users', value: `\`${client.users.cache.size}\``, inline: true },
        { name: 'Guilds', value: `\`${client.guilds.cache.size}\``, inline: true })
        message.reply({ embeds: [embed] })
    }
}