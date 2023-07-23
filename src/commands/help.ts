import {
    EmbedBuilder,
    ButtonBuilder, 
    ButtonStyle, 
    ActionRowBuilder
} from 'discord.js';
import file from './index.js';

export default {
    name: 'help',
    aliases: ['h'],
    permissions: ["SendMessages"],
    enabled: true,
    owner: false,
    async execute(client, message, args){
        const arr: string[] = [];
        file.commands.map((value, index, array) => {
            arr.push(`\`${value.name}\``)
        })
        const cmds = arr.join(", ")
        const allCmds = new EmbedBuilder()
        .setTitle('All Commands')
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(cmds)
        .setColor("Blue");
        const ovr = new EmbedBuilder()
        .setTitle("Help")
        .setColor("Blue")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("Hello! I'm Comet, a multipurpose discord bot with the goal of being a useful bot for every type of server, i'm currently at the indev phase but i can be invited/used!\n\n**Changelogs:**\n> **V2.0.0-TS**\n> - full rewrite to typescript\n> - bugfixes");
        const row = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
            .setLabel("Home")
            .setCustomId("home")
            .setEmoji('🏠')
            .setStyle(ButtonStyle.Secondary),
            new ButtonBuilder()
            .setLabel("All Commands")
            .setCustomId("cmds")
            .setEmoji('📃')
            .setStyle(ButtonStyle.Secondary)
        )
		const msg = await message.channel.send({
			embeds: [ovr],
            components: [row]
		})
        const collector = await msg.createMessageComponentCollector({ 
             filter: (i) => i.user && i.message.author.id == client.user.id,
             time: 180e3 
            });

        const mod = collector.on('collect', async (b) => {
            try{
                if(!b.isButton())return;       
                switch(b.customId){
                    case "home":
                        await msg.edit({ embeds: [ovr], components: [row], ephemeral: true }).catch(async d => {});
                        b.deferUpdate().catch(async d => {});
                    break;
                    case "cmds":
                        await msg.edit({ embeds: [allCmds], components: [row], ephemeral: true }).catch(async d => {})
                        b.deferUpdate().catch(async d => {});
                    break;
                    default:
                        await message.channel.send(b.customId);
                    break;
            }
        } catch(err){
            console.error(err);
        }
        });
}       
    }