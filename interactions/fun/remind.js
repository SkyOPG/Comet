const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('remind')
    .setDescription('reminds you of something')
    .addStringOption(option =>
        option.setName('time')
        .setDescription('how much time to remind you (in seconds)')
        .setRequired(true))
    .addStringOption(option =>
        option.setName('message')
        .setDescription('the message to remind you with')
        .setRequired(true)),
    async execute(client, interaction){
        const text = interaction.option.getString('time')
        if(text.contains('s') === true){
            var char = text.replace('s', '')
            var char2 = Number(char)
            if(char2 === 'NaN') return;
            var remt = char2 * 1000
        } else if(text.contains('m') === true){
            var char = text.replace('m', '')
            var char2 = Number(char)
            if(char2 === 'NaN') return;
            var remt = char2 * 60000
        } else if(text.contains('h') === true){
            var char = text.replace('h', '')
            var char2 = Number(char)
            if(char2 === 'NaN') return;
            var remt = char2 * 3600000
        }
        const rtime = remt
        const msg = interaction.option.getString('message')
        const aid = interaction.user.id

        await interaction.reply({
            embeds: [
                new EmbedBuilder()
                .setTitle('Reminder Set!')
                .setDescription('i have Set the reminder!')
            ]
        }).then(
       setTimeout(function(){
        interaction.reply({
            content: `${aid}, here is the reminder!`,
            embeds: [
                new EmbedBuilder()
                .setTitle('reminder!')
                .setDescription(msg)
            ]
        }, rtime)
       })
        )
    }
}