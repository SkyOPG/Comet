const { SlashCommandBuilder, EmbedBuilder, ChannelType } = require('discord.js')
const { joinVoiceChannel } = require('@discordjs/voice')

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
            const connection = joinVoiceChannel({
                channelId: interaction.options.getChannel('channel').id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            })
        }
}