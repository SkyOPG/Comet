const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('addvar')
    .setDescription('adds a variables to the database')
    .addStringOption(option =>
          option.setName('varname')
          .setDescription('variable name')
          .setRequired(true)
    )
    .addStringOption(option =>
            option.setName('value')
            .setDescription('value of the variable')
            .setRequired(true)
    )
    .addStringOption(option =>
        option.setName('table')
        .setDescription('the database table')
    ),
    async execute(client, interaction){
        await interaction.client.db.set(interaction.options.getString('varname'), interaction.options.getString('value'), 'main')
         interaction.reply('done!')
    }
}