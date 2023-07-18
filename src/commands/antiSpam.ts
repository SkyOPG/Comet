import type { Client, Message } from 'discord.js';
import { EmbedBuilder } from 'discord.js';

export default {
    name: "antispam",
    aliases: ["as"],
    owner: false,
    enabled: true,
    permissions: [],
    execute: async (client: Client<boolean>, message: any, args: string[]) => {
        if (!message.member?.permissions.has("ManageMessages") && !message.member?.roles.cache.some((r) => r.name === "Deletes")) { return message.reply({ content: "Seems like you don't have `manage_messages` intents or a role named `Deletes`" }) }
        
        const { guild } = message;
        const rule = await guild?.autoModerationRules.create(
            {
                name: `Prevent Spam messages by ${client.user?.username}`,
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
                            customMessage: `This message was prevented by ${client.user?.username} moderation`
                        }
                    }
                ]

            }).catch(async err => { await message.channel.send("your automod rule already exists, please delete it and try again") })

        const embed = new EmbedBuilder()
          
        .setAuthor({name: `${message.guild?.name}`, iconURL: message.guild?.iconURL()})
        .setColor('#5865F2')
        .setFooter({text: `Created by: ${message.user.id}`})
        .setTimestamp();

      
            if (!rule) return;
          return await message.channel.send({ embeds: [embed] })
    }
}