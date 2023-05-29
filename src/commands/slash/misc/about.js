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
            .setDescription(`Comet is a multipurpose bot Packed with features that was made with love by thesky#0001, it has many useful features that you ma not find in other bots`)
            .setFooter({ text: 'Comet ☄️' })
        ]
        })
    }
}