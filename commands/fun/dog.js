const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const axios = require('axios')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('dog')
    .setDescription('gets cute images of dogs with facts'),
    async execute(client, interaction){
       const response = await axios.get("https://some-random-api.ml/animal/dog");
       await interaction.reply({
        embeds: [
            new EmbedBuilder()
            .setTitle('dogs')
            .setDescription(response.data.fact)
            .setImage(response.data.image)
        ]
       })
    }
}