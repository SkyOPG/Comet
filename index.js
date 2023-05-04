const { Database } = require('midb');
const { Client, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');

class BotClient extends Client {
    constructor(options) {
        super(options); 
        this.db = new Database({
            path: './db',
            tables: ['main']
        }).on('ready', () => {
            console.log('Database is connected.')
        })
        this.db.start();}}

const client = new BotClient({intents: ['Guilds', 'GuildMessages', 'MessageContent']});



require('./interactions')(client)
require('./events')(client)
require('./message')(client)

// client.login('MTA5NTE3MDY3MjQ3NDQ1NjE0NQ.GDYxcq.GRPLpRAgB9ZFEZycz6YhQRFPc6GFnkvfVlCghM')

client.login(token);