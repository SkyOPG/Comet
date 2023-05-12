const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
        data: new SlashCommandBuilder()
        .setName('say')
        .setDescription('a say command')
        .addStringOption(option =>
            option.setName('message')
            .setDescription('the message to send')
            .setRequired(true)
            ),
        async execute(client, interaction) {
        await interaction.reply(interaction.options.getString('message'))
        }
}