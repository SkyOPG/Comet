const { Events, EmbedBuilder } = require('discord.js')
const prefix = 'b='

module.exports = {
    name: Events.MessageCreate,
    async execute(client, message){
        if (!message.content.startsWith(prefix)) return;

    const content = message.content.slice(prefix.length).split(" ");
    const args = content.slice(1);
    const command = client.commands.get(content[0].toLowerCase());
    if (!command) return;
    
    try {
        await command.execute(client, message);
    } catch (error) {
        message.reply('there was an error running this command')
        console.error(`Error executing ${message.commandName}`);
        console.error(error);
    }
}
}