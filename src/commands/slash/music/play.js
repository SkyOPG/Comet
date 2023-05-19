const { createAudioPlayer, getVoiceConnection, joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('plays a file (for now as its testing)'),
    async execute(client, interaction){
        const { guild, user } = interaction;
        let connection = getVoiceConnection(guild.id);

        if(connection){
            const player = createAudioPlayer();
            
            const resource = createAudioResource('./track.mp3');

            player.play(resource);
        }
        if(!connection){
            connection = joinVoiceChannel({
                channelId: interaction.options.getChannel('channel').id,
                guildId: interaction.guild.id,
                adapterCreator: interaction.guild.voiceAdapterCreator
            });
            const player = createAudioPlayer();
            
            const resource = createAudioResource('./track.mp3');

            player.play(resource);
        }
    }
}
