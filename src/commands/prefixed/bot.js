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
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Comet Is a multipurpose bot with many useful features\n\n**Stats**\n\n> Slash Commands: \`${client.commands.size}\`\n> Prefixed Commands: \`${client.cmdsPrefixed.size}\`\n> Users: \`${client.users.cache.size}\`\n> Guilds: \`${client.guilds.cache.size}\``)
        message.reply({ embeds: [embed] })
    }
}