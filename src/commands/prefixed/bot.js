const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js')
const { getMembers } = require('../../funcs/functions')
const axios = require('axios');

module.exports = {
    category: 'info',
    data: {
        name: 'bot',
        aliases: []
    },
    async execute(client, message, args){
        const githubApiBaseUrl = 'https://api.github.com';
        const repo = 'SkyOPG/Comet';
        const response = await axios.get(`${githubApiBaseUrl}/repos/${repo}`);

        const { stargazers_count, forks_count } = response.data;
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("ghnGreezrgzsrgaqg")
            .setDisabled(true)
            .setEmoji("⭐")
            .setLabel(`${stargazers_count}`)
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId("ghnGreezrgzsrgqg")
            .setDisabled(true)
            .setEmoji("🔁")
            .setLabel(`${forks_count}`)
            .setStyle(ButtonStyle.Secondary)
        );
        const embed = new EmbedBuilder()
        .setTitle('Comet Info')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Comet Is a multipurpose bot with many useful features\n\n**Stats**\n\n> Slash Commands: \`${client.commands.size}\`\n> Prefixed Commands: \`${client.cmdsPrefixed.size}\`\n> Users: \`${getMembers(client)}\`\n> Guilds: \`${client.guilds.cache.size}\``)
        message.reply({ embeds: [embed], components: [row] })
    }
}