const { Client, GatewayIntentBits } = require('discord.js');
const { Player } = require("discord-music-player");
const { token } = require('./config.json');
const colors = require('colors');

console.log('0--------------| StarBot |--------------0'.yellow);
class BotClient extends Client {
    constructor(options) {
        super(options); 
        }}



const client = new BotClient({intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates']});

const player = new Player(client, {
    leaveOnEmpty: true
});

client.player = player;


require('./message')(client)
require('./interactions')(client)
require('./events')(client)

client.login(token);