const { Hangman } = require('discord-gamecord');
const { EmbedBuilder, SlashCommandBuilder } = require('discord.js')
const { randomItem } = require('../../../funcs/functions');
let themes = [ "nature", "sport", "color", "camp", "fruit", "discord", "winter", "pokemon" ]
let theme = randomItem(themes)
module.exports = {
    data: new SlashCommandBuilder()
    .setName('snake')
    .setDescription('your beloved snake game, in discord!'),
    execute(client, message){
        const Game = new Snake({
            message: message,
            isSlashGame: true,
            embed: {
              title: 'Snake Game',
              overTitle: 'Game Over',
              color: '#5865F2'
            },
            emojis: {
              board: '⬛',
              food: '🍎',
              up: '⬆️', 
              down: '⬇️',
              left: '⬅️',
              right: '➡️',
            },
            stopButton: 'Stop',
            timeoutTime: 60000,
            snake: { head: '👀', body: '🟩', tail: '🟢', over: '💀' },
            foods: ['🍎', '🍇', '🍊', '🫐', '🥕', '🥝', '🌽'],
            playerOnlyMessage: 'Only {player} can use these buttons.'
          });
          
          Game.startGame();
          Game.on('gameOver', result => {
            console.log(result)
          });
    }
}