const { clid, deploy } = require('./src/funcs/functions');
const { Client } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { token } = require('./config.json');
const colors = require('colors');
const totalLines = clid('./src');
console.log('0--------------| Comet |--------------0'.blue);
console.log(`Total lines in the project: ${totalLines}`);
class BotClient extends Client {
    constructor(options) {
        super(options); 
        
    }
}

const client = new BotClient({intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates'] });

require('./src/handlers/message')(client)
require('./src/handlers/interactions')(client)
require('./src/handlers/events')(client)
deploy()

client.login(token);