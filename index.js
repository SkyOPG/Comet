const { clid, deploy } = require('./src/funcs/functions');
const { Client } = require('discord.js');
const fs = require('fs');
const path = require('path');
const { token } = require('./config.json');
const colors = require('colors');
const totalLines = clid('./src');
console.log('0--------------| Comet |--------------0'.blue);
console.log(`Total lines in the project: ${totalLines}`.green);
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
const express = require('express')
    const app = express()

    app.enable('trust proxy')
    app.set("etag", false)
    app.use(express.static('./src/Dashboard'))

    app.get('/', (req, res) => {
        res.sendFile('./src/Dashboard/html/home.html', { root: __dirname })
      })

    app.listen(90, () => console.log('listening to port 90!'.green))

client.login(token);