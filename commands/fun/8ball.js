const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const answers = ['yes', 'no', 'maybe'];

module.exports = {
  data: new SlashCommandBuilder()
  .setName('8ball')
  .setDescription('69420% accurate')
  .addStringOption(option =>
    option.setName('question')
        .setDescription('the question to answer')
        .setRequired(true)),
  async execute(client, interaction) {
    const randomPick = answers[Math.floor(Math.random() * answers.length)];
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
        .setTitle('8ball')
        .setDescription(`you asked for: \`${interaction.options.getString('question')}\`\nthe answer: ||${randomPick}||`)
        .setColor('Random')
      ]
    })
  }
}