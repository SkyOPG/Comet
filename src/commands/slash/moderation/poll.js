const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('poll')
    .setDescription('make a poll')
    .addStringOption(option => option.setName('description').setDescription('sets the poll description').setMinLength(1).setMaxLength(2000)),
    async execute(client, interaction){
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages)) return interaction.reply('you don\'t have enough permissions to use this command');

        const desc = interaction.options.getString('description')

        const embed = new EmbedBuilder()
        .setTitle('Poll')
        .setDescription(desc)

        await interaction.reply({ content: 'done!', ephemeral: true });
        await interaction.channel.send({ embed: [embed] }).then(sentMessage => {
            sentMessage.react('👍')
            sentMessage.react('👎')
        })
    }
}