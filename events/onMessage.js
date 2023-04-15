const { Events } = require('discord.js')
const { prefix } = require('../discord.json')

module.exports = {
    name: Events.MessageCreate,
    async execute(client, message){
    if (!message.content.startsWith(prefix)) return;

    const command = client.commands.get(message.commandName);
    
    try {
        await command.execute(client, message);
    } catch (error) {
        message.reply('there was an error running this command')
        console.error(`Error executing ${message.commandName}`);
        console.error(error);
    }
}
}