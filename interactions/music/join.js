const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js')
const { joinVoiceChannel, getVoiceConnection } = require('@discordjs/voice')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('join')
    .setDescription('Joins a VC')
    .addChannelOption(option => 
        option.setName('channel')
        .setDescription('Channel to join')
        .addChannelTypes(ChannelType.GuildVoice)
        .setRequired(true)),
        async execute(client, interaction){
            let connection = getVoiceConnection(interaction.guild.id);
            
            if(connection) return await interaction.reply('I\'m already in another channel');

            if(!connection){
                connection = joinVoiceChannel({
                channelId: interaction.options.getChannel('channel').id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            }).then(await interaction.reply('I Joined the channel!'))
        }
        
        }
}