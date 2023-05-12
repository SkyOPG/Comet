const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('plays a song')
    .addStringOption(option => option.setName('query').setDescription('the song to search for')),
    async execute(client, interaction){
        const { player } = client;
        const { options, guild, user } = interaction;

        let guildQueue = player.getQueue(guild.id);

        let queue = player.createQueue(guild.id);

        await queue.join(user.voice.channel);

        await interaction.reply('added to queue')

        let song = await queue.play(options.getString('query')).catch(err => {
            console.log(err)
            interaction.reply('an unexpected error just happened!');
            if(!guildQueue){
           queue.stop()
        }
        });
    }
}