const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('about')
    .setDescription('gives info about the bot and its dev'),
    async execute(client, interaction){
        await interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setTitle('About')
            .setDescription(info)
            .setFooter(name)
        ]
        })
    }
}