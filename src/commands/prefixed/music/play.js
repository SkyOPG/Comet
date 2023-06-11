const { getGuildQueue } = require('../../../funcs/functions')
const { EmbedBuilder } = require('discord.js')

module.exports = {
    category: 'music',
        data: {
        name: 'play',
        aliases: ['p']
    },
    async execute(client, message, args){
        const guildQueue = await getGuildQueue(client, message)

        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(err => {
            console.log(err);
            if(!guildQueue)
                queue.stop();
        });
        if(song.isFirst){
            message.channel.send({ embeds: [
                new EmbedBuilder()
                .setTitle(`Now Playing ${song.name}`)
                .setDescription(`Name: ${song.name} \nAuthor: ${song.author} \nDuration: ${song.duration}\nLive: ${song.isLive}\nurl: [link](${song.url})`)
                .setThumbnail(song.thumbnail)
            ] })
        }else {
            message.channel.send({ embeds: [
                new EmbedBuilder()
                .setTitle(`Added ${song.name} to the Queue`)
                .setDescription(`Name: ${song.name} \nAuthor: ${song.author} \nDuration: ${song.duration}\nLive: ${song.isLive}\nurl: [link](${song.url})`)
                .setThumbnail(song.thumbnail)
            ] })
        }
    }
}