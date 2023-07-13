const { EmbedBuilder } = require('discord.js')
const { getMembers } = require('../../funcs/functions')

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
        .setDescription(`Comet Is a multipurpose bot with many useful features\n\n**Stats**\n\n> Slash Commands: \`${client.commands.size}\`\n> Prefixed Commands: \`${getMembers(client)}\`\n> Guilds: \`${client.guilds.cache.size}\``)
        message.reply({ embeds: [embed] })
    }
}