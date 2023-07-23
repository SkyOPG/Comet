import { Snake } from 'discord-gamecord';
import { EmbedBuilder } from 'discord.js';

export default {
    name: 'snake',
    aliases: [],
    owner: false,
    enabled: true,
    permissions: ["SendMessages"],
    cooldown: 30,
    async execute(client, message, args) {

const Game = new Snake({
  message: message,
  isSlashGame: false,
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
Game.on('gameOver', result => { message.channel.send( { embeds: [ new EmbedBuilder() .setTitle(result.result) .addFields( { name: "score", value: result.score } ) ] } ) } ) } }