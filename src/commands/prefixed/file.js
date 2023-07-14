const schema = require("../../Schemas/Files")
const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle } = require("discord.js")
const { findThumbnail } = require("../../funcs/functions")

module.exports = {
    category: "other",
    data: {
        name: "file",
        aliases: []
    },
    async execute(client, message, args){
        if(args[0]){
            switch(args[0]){
                case "create": {
                    if(!args[1]) return message.reply({ embeds: [ new EmbedBuilder()
                    .setTitle("Error")
                .setDescription("File name not provided.")
            .setColor("Red")
        .setFooter({ text: "c!file create hi.txt" }) ] })
                    const data = await schema.findOne({ Filename: args[1] })
                    if(data){
                        message.reply({ embeds: [ new EmbedBuilder()
                            .setTitle("Error")
                        .setDescription("File name already exists.")
                    .setColor("Red")
                .setFooter({ text: "c!file create hi.txt" }) ] })
                    } else {
                        await schema.create({
                            Filename: args[1],
                            Owner: message.author.id,
                            Views: 0,
                            Forks: 0,
                            FileData: {
                                isPrivate: false,
                                Code: ""
                            }
                        })

                        message.reply({ embeds: [ new EmbedBuilder()
                            .setTitle("Success!")
                        .setDescription("File created!")
                    .setColor("Green")
                .setFooter({ text: "yay!" }) ] })
                    }
                } break;
                case "view": {
                    if(!args[1]) return message.reply({ embeds: [ new EmbedBuilder()
                        .setTitle("Error")
                    .setDescription("File name not provided.")
                .setColor("Red")
            .setFooter({ text: "c!file view hi.txt" }) ] })
                    const data = await schema.findOne({ Filename: args[1] });
                    if(data){
                        if(data.FileData.isPrivate) return message.reply({ embeds: [ new EmbedBuilder()
                            .setTitle("Error")
                        .setDescription("File is Private.")
                    .setColor("Red")
                .setFooter({ text: "c!file view hi.txt" }) ] })
                    const button = new ButtonBuilder()
                            .setCustomId("file-edit")
                            .setEmoji("✏️")
                            .setStyle(ButtonStyle.Secondary)
                            .setLabel("edit")
                        const row = new ActionRowBuilder()
                        .addComponents( 
                            button
                        );
                        if(data.Owner !== message.author.id) button.setDisabled(true);
                        const embed = new EmbedBuilder()
                        .setTitle(`Viewing ${data.Filename}`)
                        .setColor("Blue")
                        .setThumbnail(findThumbnail(data.Filename))
                        .setDescription(`\`\`\`\nOwner: ${data.Owner}\nViews: ${data.Views}\nForks: ${data.Forks}\n\`\`\`\n\n\`\`\`\n${data.FileData.Code ? data.FileData.Code : "none"}\n\`\`\``)
                        const msg = await message.reply({ embeds: [embed], components: [row] });
                        const collector = await msg.createMessageComponentCollector({ 
                            filter: (i) => i.user && i.message.author.id == client.user.id,
                            time: 180e3 
                           });
                        const mod = collector.on("collect", async (b) => {
                            if(data.Owner !== message.author.id) return await msg.reply({ embeds: [
                                new EmbedBuilder()
                                .setTitle("Error")
                                .setDescription("You don't own this file")
                                .setColor("Red")
                            ], ephemeral: true });
                            const modal = new ModalBuilder()
                            .setTitle(`Edit ${data.Filename}`)
                            .setCustomId("modal-edit-file");
                            const code = new TextInputBuilder()
                            .setCustomId("code")
                            .setLabel("Code")
                            .setValue(data.FileData.Code)
                            .setStyle(TextInputStyle.Paragraph);
                            const file = new TextInputBuilder()
                            .setCustomId("file")
                            .setLabel("FILE - DONT EDIT")
                            .setValue(data.Filename)
                            .setStyle(TextInputStyle.Short);
                            const modal_row = new ActionRowBuilder()
                            .addComponents(
                                code
                            )
                            const modal_row2 = new ActionRowBuilder()
                            .addComponents(
                                file
                            )
                            modal.addComponents(
                                modal_row,
                                modal_row2
                            )
                            const mod = await b.showModal(modal);
                        })
                    } else {
                        return message.reply({ embeds: [ new EmbedBuilder()
                            .setTitle("Error")
                        .setDescription("File not found.")
                    .setColor("Red")
                .setFooter({ text: "c!file view hi.txt" }) ] })
                    }
                } break;
            }
        }
    }
}