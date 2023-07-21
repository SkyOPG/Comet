import type { Client } from 'discord.js';
import { EmbedBuilder } from 'discord.js';

export default {
    name: "antispam",
    aliases: ["as"],
    owner: false,
    enabled: true,
    permissions: ["ManageMessages"],
    execute: async (client: Client<boolean>, message: any, args: string[]) => {
        
        const { guild } = message;
        const rule = await guild.autoModerationRules.create(
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

            }).catch(async err => {
                 await message.reply("your automod rule already exists!"); 
                })

        const embed = new EmbedBuilder()
          
        .setAuthor({name: `${message.guild?.name}`, iconURL: message.guild?.iconURL()})
        .setColor('#5865F2')
        .setFooter({text: `Created by: ${message.user?.id}`})
        .setTimestamp();

      
            if (!rule) return;
          return await message.reply({ embeds: [embed] })
    }
}