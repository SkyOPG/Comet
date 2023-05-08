const {
    SlashCommandBuilder,
    EmbedBuilder,
    ModalBuilder,
    TextInputBuilder,
    TextInputStyle,
    ActionRowBuilder,
    ChatInputCommandInteraction,
  } = require("discord.js");
  
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
          
          .setRequired(true)
      ),
  
    /**
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction) {
      const severity = interaction.options.getString("severity");
      const reportModal = new ModalBuilder()
        .setCustomId("bugmodal")
        .setTitle("Report a bug");
    
      const titleInput = new TextInputBuilder()
        .setCustomId("bugtitle")
        .setLabel("Title")
        .setStyle(TextInputStyle.Short)
        .setPlaceholder("What bug you encounter?")
        .setMaxLength(256)
        .setRequired(false);
    
      const descriptionInput = new TextInputBuilder()
        .setCustomId("bugdescription")
        .setLabel("Describe the bug")
        .setStyle(TextInputStyle.Paragraph)
        .setRequired(false);
    
      const titleactionRow = new ActionRowBuilder().addComponents(titleInput);
      const descriptionactionRow = new ActionRowBuilder().addComponents(
        descriptionInput
      );
      
    
      reportModal.addComponents(titleactionRow, descriptionactionRow);
    
      try {
        await interaction.showModal(reportModal);
      } catch (error) {
        console.error(error);
        await interaction.reply({
          content: "Something went wrong",
          ephemeral: true,
        })
      };
    
        const response = await interaction.awaitModalSubmit({ time: 300000 });
        const title = response.fields.getTextInputValue("bugtitle");
        const description = response.fields.getTextInputValue("bugdescription");
       
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
       
        try {
          await channel.send({ embeds: [embed] });
          await interaction.followUp({ content: "Bug report sent succesfully to support server!", ephemeral: true });
        } catch (error) {
          console.error(error);
          await interaction.followUp({
            content: "Failed to send bug report",
            ephemeral: true,
          });
        }
      }
  }