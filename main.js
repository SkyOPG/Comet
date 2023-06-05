const { clid, deploy } = require('./src/funcs/functions');
const { Client, Partials, Collection } = require("discord.js");
const { Channel, GuildMember, GuildScheduledEvent, Message, Reaction, ThreadMember, User } = Partials;
const fs = require('fs');
const path = require('path');
const { token } = require('./config.json');
const colors = require('colors');
const totalLines = clid('./src');
const { Player } = require('discord-music-player');
console.log('0--------------| Comet |--------------0'.blue);
console.log(`Total lines in the project: ${totalLines}`.green);
class BotClient extends Client {
    constructor(options) {
        super(options); 
        this.deploy = () => {
            deploy()
        }
        this.cmdsPrefixed = new Collection()
    this.aliases = new Collection()
    this.category = {
       ai: new Collection(),
       moderation: new Collection(),
       economy: new Collection(),
       fun: new Collection(),
       info: new Collection(),
       levelling: new Collection(),
       miscanellous: new Collection(),
        music: new Collection(),
        none: new Collection()
    }
    this.player = new Player(this, {
        leaveOnEmpty: false
    });
        
    }
}

const client = new BotClient({
    intents: 3276799,
            partials: [
              Channel,
              GuildMember,
              GuildScheduledEvent,
              Message,
              Reaction,
              ThreadMember,
              User,
            ],
        fetchAllMembers: true });
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

client.login(token);

process.on('unhandledRejection', (reason, p) => {
});

process.on('uncaughtException', (err, origin) => {
});

process.on('uncaughtExceptionMonitor', (err, origin) => {
});

process.on('multipleResolves', (type, promise, reason) => {
});