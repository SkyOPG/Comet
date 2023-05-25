const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js')
const meta = require('meta-discord')
const { pathify } = require('../../../funcs/functions')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('shows your profile')
    .addUserOption(option =>
        option.setName('user')
        .setDescription('the user you want to check')
        .setRequired(true)),
    async execute(client, interaction){
        console.log(interaction)
        const { user } = interaction;

        await interaction.deferReply()
try{
        const ide = interaction.options.getUser('user').id

        if(ide === '849283841583743036'){
            const buffer = await meta.profileImage(ide, {
                usernameColor: '#d9dfef',
                customBadges: ['https://cdn.discordapp.com/attachments/1081881878304395374/1109253298021744660/skull.png', 'https://cdn.discordapp.com/attachments/1081881878304395374/1109424148196884520/7088-early-verified-bot-developer.png', 'https://cdn.discordapp.com/attachments/1081881878304395374/1109424250605015071/3721-verified.png'],
                borderColor: ['#4a9edf', '#4275b7']
               });
               const image = new AttachmentBuilder(buffer, { name: 'profile.png' });

               await interaction.editReply({ files: [image] })
                } else {
                    const buffer = await meta.profileImage(ide, {
                        usernameColor: '#d9dfef',
                        borderColor: ['#4a9edf', '#4275b7']
                       });
                       const image = new AttachmentBuilder(buffer, { name: 'profile.png' });
    
                       await interaction.editReply({ files: [image] })
                }} catch {}
            }}