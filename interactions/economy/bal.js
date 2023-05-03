const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('stars')
    .setDescription('gets the amount of stars you currently have'),
    async execute(client, interaction){
        const db = client.db
        
    }
}