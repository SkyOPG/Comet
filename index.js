const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const colors = require('colors');

console.log('0--------------| Comet |--------------0'.blue);
class BotClient extends Client {
    constructor(options) {
        super(options); 
        }}



const client = new BotClient({intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates'] });


require('./handlers/message')(client)
require('./handlers/interactions')(client)
require('./handlers/events')(client)

client.login(token);