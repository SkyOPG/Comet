const { QuickDB } = require('quick.db');
const { Client, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');
const colors = require('colors')
console.log('0--------------| StarBot |--------------0'.yellow)
class BotClient extends Client {
    constructor(options) {
        super(options); 
        console.log('0--------------| Database'.blue)
        this.db = new QuickDB();
        console.log('Database Ready! Ping: 0ms'.green)}}
const client = new BotClient({intents: ['Guilds', 'GuildMessages', 'MessageContent']});
module.exports = client;
require('./message')(client)
require('./interactions')(client)
require('./events')(client)
client.login(token);