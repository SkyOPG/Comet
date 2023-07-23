import { Hangman } from 'discord-gamecord';
import { EmbedBuilder } from 'discord.js';
let themes = [ "nature", "sport", "color", "camp", "fruit", "discord", "winter", "pokemon" ]

function randomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
  
    const item = arr[randomIndex];
  
    return item;
  }

let theme = randomItem(themes)
export default {
    name: 'hangman',
    aliases: ['hm'],
    owner: false,
    permissions: ["SendMessages"],
    cooldown: 30,
    enabled: true,
    execute(client, message, args){
        const Game = new Hangman({
            message: message,
            isSlashGame: false,
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
                .addFields({ name: 'user', value: `\`${result.player.username}\``, inline: true },
                { name: "word", value: `\`${result.word}\``, inline: true },
                { name: 'damage', value: `\`${result.damage}\``, inline: true },
                { name: 'guessed words', value: `\`${result.guessed.join(', ')}\``, inline: true })
                .setColor('#5865F2')
            ] })
          });
    }
}