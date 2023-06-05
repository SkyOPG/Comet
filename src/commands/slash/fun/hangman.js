const { Hangman } = require('discord-gamecord');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { randomItem } = require('../../../funcs/functions');
let themes = [ "nature", "sport", "color", "camp", "fruit", "discord", "winter", "pokemon" ]
let theme = randomItem(themes)
module.exports = {
    data: new SlashCommandBuilder()
    .setName('hangman')
    .setDescription('your beloved hangman game, in discord!'),
    execute(client, message){
        const Game = new Hangman({
            message: message,
            isSlashGame: true,
            embed: {
              title: `Hangman | ${theme}`,
              color: '#5865F2'
            },
            hangman: { hat: '🎩', head: '😟', shirt: '👕', pants: '🩳', boots: '👞👞' },
            timeoutTime: 60000,
            theme: theme,
            winMessage: 'You won! The word was **{word}**.',
            loseMessage: 'You lost! The word was **{word}**.',
            playerOnlyMessage: 'Only {player} can use these buttons.'
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            message.channel.send({ embeds: [
                new EmbedBuilder()
                .setTitle('Game Over')
                .setAuthor({ name: `${result.result}`, iconURL: 'https://cdn.discordapp.com/avatars/1101804805887901716/220f9737e60b5142062c7b011db129b8.webp?size=4096'})
                .addFields({ name: 'user', value: `\`${result.player.username}#${result.player.discriminator}\``, inline: true },
                { name: "word", value: `\`${result.word}\``, inline: true },
                { name: 'damage', value: `\`${result.damage}\``, inline: true },
                { name: 'guessed words', value: `\`${result.guessed.join(', ')}\``, inline: true })
                .setColor('#5865F2')
            ] })
          });
    }
}