const { QuickDB } = require('quick.db');
const { Client, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');
const express = require('express');
const app = express();
const colors = require('colors');

app.enable('trust proxy')
app.set('etag', false)
app.use(express.static(__dirname + "Dashboard"))

console.log('0--------------| StarBot |--------------0'.yellow);
class BotClient extends Client {
    constructor(options) {
        super(options); 
        console.log('0--------------| Database'.blue)
        this.db = new QuickDB();
        console.log('Database Ready! Ping: 0ms'.green)}}

const client = new BotClient({intents: ['Guilds', 'GuildMessages', 'MessageContent']});


require('./message')(client)
require('./interactions')(client)
require('./events')(client)

client.login(token);