const { Collection } = require('discord.js')
const path = require('path')
const fs = require('fs')

module.exports=(client)=>{
    client.commandsPrefixed = new Collection()
commandsPath = path.join(__dirname, 'commands');
commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    if ('data' in command && 'execute' in command) {
        client.commandsPrefixed.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}
}