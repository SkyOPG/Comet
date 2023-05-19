const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js')
const meta = require('meta-discord')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('profile')
    .setDescription('shows your profile'),
    async execute(client, interaction){
        console.log(interaction)
        
        const { user } = interaction;

        const status = interaction.member.presence.status
        console.log(status)

        const buffer = await meta.profileImage(user.id, {
            usernameColor: '#d9dfef',
            borderColor: ['#f90257', '#043a92'],
            presenceStatus: status
           });
        console.log(buffer)

        const image = new AttachmentBuilder(buffer, { name: 'profile.png' });

        await interaction.reply({ files: [image] })
    }
}