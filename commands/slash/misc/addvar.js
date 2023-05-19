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
        const db = client.db
        const name = interaction.options.getString('varname')
        const value = interaction.options.getString('value')
        await db.set(name, value).then(interaction.reply('adding'))
    }
}