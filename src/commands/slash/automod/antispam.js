const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require ('@discordjs/builders');

module.exports = {
        data: new SlashCommandBuilder()
        .setName('antispam')
        .setDescription('uses automod to do antispam'),
async execute (client, interaction) {

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ManageMessages) && !interaction.member.roles.cache.some((r) => r.name === "Deletes")) { return interaction.reply({ content: "Seems like you don't have `manage_messages` intents or a role named `Deletes", ephemeral: true }) }
        
        const {guild} = interaction;
        const rule = await guild.autoModerationRules.create(
            {
                name: `Prevent Spam messages by ${client.user.username}`,
                creatorId: `1090224528157851678`,
                enabled: true,
                eventType: 1,
                triggerType: 3,
                triggerMetadata:
                {

                },
                actions: [
                    {
                        type: 1,
                        metadata: {
                            channel: interaction.channel,
                            durationSeconds: 10,
                            customMessage: `This message was prevented by ${client.user.username} moderation`
                        }
                    }
                ]

            }).catch(async err => {
               
console.log(err)
            })

        const embed = new EmbedBuilder()
          
        .setAuthor({name: `${interaction.guild.name}`, iconURL: interaction.guild.iconURL()})
        .setDescription(`**Your automod rule for \`spam messages\` has been created successfully**`)
        .setThumbnail(interaction.user.displayAvatarURL({dynamic: true}))
        .setColor(0x00FF00)
        .setFooter({text: `Created by: ${interaction.user.id}`, iconURL: interaction.user.avatarURL()})
        .setTimestamp();

      
            if (!rule) return;
await interaction.deferReply({fetchReply : true })
          return   await interaction.editReply({ embeds: [embed] })

    }


}