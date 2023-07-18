import { Client, GatewayIntentBits, Collection } from 'discord.js';
import { registerEvents } from '../utils/events.js';
import Events from '../events/index.js';
import Keys from '../keys.js';

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});

export default client;

registerEvents(client, Events);

client.login(Keys.clientToken)
    .catch((err) =>{ 
        console.log("[Error]", err);
        process.exit(1);
    })