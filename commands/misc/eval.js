const { SlashCommandBuilder } = require('discord.js')

module.exports = ({
    data: new SlashCommandBuilder()
    .setName('eval')
    .setDescription('Evaluates somehing')
    .addStringOption(option =>
        option.setName('code')
        .setDescription('code to evaluate')
        .setRequired(true)
    ),
    async execute(client, interaction){
       await eval(interaction.options.getString('code'))
    }
})