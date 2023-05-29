const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
  
module.exports = {
    data: new SlashCommandBuilder()
      .setName("bug")
      .setDescription("Report a bug in the bot")
      .addStringOption((option) =>
        option
          .setName("severity")
          .setDescription("Select the severity level of the bug")
          .addChoices(
            { name: "Low", value: "low" },
            { name: "Medium", value: "medium" },
            { name: "High", value: "high" }
          )
          .setRequired(true))
      .addStringOption(option =>
        option
        .setName('title')
        .setDescription('title of the bug')
        .setRequired(true))
      .addStringOption(option =>
        option.setName('description')
        .setDescription('describe the bug')
        .setRequired(true)),
    async execute(client, interaction) {
        const severity = interaction.options.getString('severity')
        const title = interaction.options.getString('title')
        const description = interaction.options.getString('description')
       
        await response.deferUpdate();
        
          let embedColor;
        if (severity === "low") {
          embedColor = "Yellow";
        } else if (severity === "medium") {
          embedColor = "Orange";
        } else {
          embedColor = "Red";
        }
       
        const embed = new EmbedBuilder()
          .setColor(embedColor)
          .setTitle(`${severity.toUpperCase()} Priority Bug Report`)
          .addFields(
            { name: "Title", value: title },
            { name: "Description", value: description },
            { name: "Reported By:", value: interaction.user.tag },
            { name: "Reported from:", value: interaction.guild.name }
          )
          .setTimestamp()
    
        const guildId = "999084014906380308";
        const channelId = "1104418322067509411";
    
        const guild = await interaction.client.guilds.fetch(guildId);
        const channel = guild.channels.cache.get(channelId);

        channel.send({ embeds: [embed] })
       
        
          console.error(error);
          await interaction.followUp({
            content: "Failed to send bug report",
            ephemeral: true,
          });
        }
      }