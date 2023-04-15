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
    ),
    async execute(client, interaction){
        await client.db.set(interaction.options.getString('varname'), interaction.options.getString('value'), 'main')
            await interaction.reply('done!')
    }
}