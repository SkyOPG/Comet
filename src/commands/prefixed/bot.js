const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: {
        name: 'bot',
        description: "Gives information about the bot",
        aliases: []
    },
    async execute(client, message, args){
        const embed = new EmbedBuilder()
        .setTitle('Comet Info')
        .setDescription('Comet is a bot made by thesky#0001')
        .addFields({ name: 'Slash Commands', value: `\`${client.commands.length}\``, inline: true },
        { name: 'Prefix Commands', value: `\`${client.cmdsPrefixed.length}\``, inline: true },
        { name: 'Users', value: `\`${client.users.cache.length}\``, inline: true },
        { name: 'Guilds', value: `\`${client.guilds.cache.length}\``, inline: true })
        message.reply({ embeds: [embed] })
    }
}