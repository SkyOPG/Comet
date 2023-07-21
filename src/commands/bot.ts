import { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } from 'discord.js';
import axios from 'axios';
import file from './index.js';

export default {
    name: 'bot',
    aliases: [],
    enabled: true,
    permissions: [],
    async execute(client, message, args){
        client.commands = file.commands;
        client.aliases = file.aliases;
        const githubApiBaseUrl = 'https://api.github.com';
        const repo = 'SkyOPG/Comet';
        const response = await axios.get(`${githubApiBaseUrl}/repos/${repo}`);

        const { stargazers_count, forks_count } = response.data;
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setCustomId("star_count")
            .setDisabled(true)
            .setEmoji("⭐")
            .setLabel(`${stargazers_count}`)
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setCustomId("forks_count")
            .setDisabled(true)
            .setEmoji("🔁")
            .setLabel(`${forks_count}`)
            .setStyle(ButtonStyle.Secondary)
        );
        const embed = new EmbedBuilder()
        .setTitle('Comet Info')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Comet Is a multipurpose bot with many useful features\n\n**Stats**\n\n> Slash Commands: \`${client.commands.size}\`\n> Prefixed Commands: \`${client.cmdsPrefixed.size}\`\n> Users: \`${client.users.cache.size}\`\n> Guilds: \`${client.guilds.cache.size}\``)
        message.reply({ embeds: [embed], components: [row] })
    }
}