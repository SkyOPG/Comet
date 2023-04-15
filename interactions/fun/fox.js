const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const axios = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('fox')
    .setDescription('gets cute images of foxes with facts'),
    async execute(client, interaction){
       const response = await axios.get("https://some-random-api.ml/animal/fox");
       await interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setTitle('Foxes')
            .setDescription(response.data.fact)
            .setImage(response.data.image)
        ]
       })
    }
}
/*
Copyright SkyOPG 2022-2023
*/