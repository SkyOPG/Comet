const { EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ComponentType } = require('discord.js')

module.exports = {
    category: 'info',
    data: {
        name: 'help',
        aliases: ['h']
    },
    async execute(client, message, args){
        const arr = new Array();
        client.cmdsPrefixed.map((value, index, array) => {
            arr.push(`\`${value.data.name}\``)
        })
        const cmds = arr.join(", ")
        const allCmds = new EmbedBuilder()
        .setTitle('All Commands')
        .setDescription(cmds);
        const ovr = new EmbedBuilder()
        .setTitle("Help")
        .setColor("Blue")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription("Hello! I'm Comet, a multipurpose discord bot with the goal of being a useful bot for every type of server, i'm currently at the indev phase but i can be invited/used!\n\n**Changelogs:**\n> **V2.0.0-a0.12.2**\n> - Fixed 47 different bugs");
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
			embeds: [allCmds],
            components: [row]
		})
        const collector = await msg.createMessageComponentCollector({ 
             filter: (i) => (i.isButton() || i.isSelectMenu()) && i.user && i.message.author.id == client.user.id,
             time: 180e3 
            });

        collector.on('collect', async b => {
            try{
	            if (b.user.id !== message.user.id) return msg.reply({ content: "This is not your button", ephemeral: true });
       
                switch(b.customId){
                    case "home":
                        await msg.reply({ embeds: [ovr], components: [row], ephemeral: true }).catch(async d => {});
                        b.deferUpdate();
                    break;
                    case "cmds":
                        await msg.reply({ embeds: [allCmds], components: [row], ephemeral: true }).catch(async d => {})
                        b.deferUpdate();
                    break;
                    default:
                        await message.channel.send(b.customId);
                    break;
            }
        } catch(err){}
        });
}       
    }