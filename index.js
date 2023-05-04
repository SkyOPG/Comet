const { Client, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');


const client = new Client({intents: ['Guilds', 'GuildMessages', 'MessageContent']});



require('./interactions')(client)
require('./events')(client)
require('./message')(client)

client.login(token);