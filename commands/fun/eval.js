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
    async execute(user, interaction){
        if(user.id === 999095882156875856){
       await eval(interaction.options.getString('code'))
        } else {
            await interaction.reply(`you are not my dev`)
        }
    }
})