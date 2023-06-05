const { EmbedBuilder, PermissionsBitField } = require ('@discordjs/builders');

module.exports = {
        data: {
            name: 'antispam',
            aliases: ['as']
        },
async execute (client, message) {

        if (!message.member.permissions.has("ManageMessages") && !message.member.roles.cache.some((r) => r.name === "Deletes")) { return message.reply({ content: "Seems like you don't have `manage_messages` intents or a role named `Deletes", ephemeral: true }) }
        
        const {guild} = message;
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
                            channel: message.channel,
                            durationSeconds: 10,
                            customMessage: `This message was prevented by ${client.user.username} moderation`
                        }
                    }
                ]

            }).catch(async err => {
               
console.log(err)
            })

        const embed = new EmbedBuilder()
          
        .setAuthor({name: `${message.guild.name}`, iconURL: message.guild.iconURL()})
        .setDescription(`**Your automod rule for \`spam messages\` has been created successfully**`)
        .setThumbnail(message.user.displayAvatarURL({dynamic: true}))
        .setColor('#5865F2')
        .setFooter({text: `Created by: ${message.user.id}`, iconURL: message.user.avatarURL()})
        .setTimestamp();

      
            if (!rule) return;
          return await message.channel.send({ embeds: [embed] })

    }


}