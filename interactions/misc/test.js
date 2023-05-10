const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const test = require('../../Schemas/level')
const ye = 'e'

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('DB test'),
    async execute(client, interaction){
        const { guild, user } = interaction;

        test.deleteMany({ GuildId: guild.id })

        console.log(ye)
    }
}