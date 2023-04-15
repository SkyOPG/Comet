const { Database } = require('midb');index
const { Client, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');

class BotClient extends Client {
    constructor(options) {
        super(options); 
        this.db = new Database({
            path: options.database?.path || './db',
            tables: options.database?.tables || ['main']
        }).start();
    }
}

const client = new BotClient({
    intents: ['Guilds', 'GuildMessages', 'MessageContent']
});

require('./interactions')(client)
require('./events')(client)
require('./message')(client)

client.login(token);