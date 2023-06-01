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
        this.deploy = () => {
            deploy()
        }
        
    }
}

const client = new BotClient({intents: ['Guilds', 'GuildMessages', 'MessageContent', 'GuildVoiceStates'] });
client.deploy()
const handlerPath = path.join(__dirname, './src/handlers');
const handlerFiles = fs.readdirSync(handlerPath);

for (const file of handlerFiles) {
	const filePath = path.join(handlerPath, file);
	const handler = require(filePath);
	try{
        handler.execute(client)
    }catch{}
}

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