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
        if(interaction.user.id === 957355794154807336){
       await eval(interaction.options.getString('code'))
        }
    }
})