const { Events, EmbedBuilder } = require('discord.js')
const prefix = 'b='

module.exports = {
    name: Events.MessageCreate,
    async execute(client, message){
        if (!message.content.startsWith(prefix)) return;

    const content = message.content.slice(prefix.length).split(" ");
    const args = content.slice(1);
    const cmd = client.cmdsPrefixed.get(content[0].toLowerCase());
    if (!cmd) return;
    
    try {
        await cmd.execute(client, message);
    } catch (error) {
        message.reply('there was an error running this cmd')
        console.error(`Error executing ${message.cmdName}`);
        console.error(error);
    }
}
}