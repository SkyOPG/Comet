const { Collection } = require('discord.js')
const path = require('path')
const fs = require('fs')
const colors = require('colors')

module.exports={
data: {
    name: 'reload',
    aliases: []
},
async execute(client, message, args){
cmdsPath = __dirname
cmdFiles = fs.readdirSync(cmdsPath).filter(file => file.endsWith('.js'));
for (command of cmdFiles) {
    const fpath = path.join(cmdsPath, command);
    const cmd = require(fpath);

    client.cmdsPrefixed.delete(cmd.data.name);
    cmd.data.aliases.map((thing) => {
        client.aliases.delete(thing);
        console.log('Unloaded alias', thing)
    })
    console.log('unloaded command', cmd.data.name)
}
for (const file of cmdFiles) {
    const fpath = path.join(cmdsPath, file);
    const cmd = require(fpath);
    if ('data' in cmd && 'execute' in cmd) {
        client.cmdsPrefixed.set(cmd.data.name, cmd);
        cmd.data.aliases.map((thing) => {
            client.aliases.set(thing, cmd);
            console.log('loaded alias '+ thing)
        })
        console.log(`Loaded ${cmd.data.name}`.green);
    } else {
        console.log(`[WARNING] The cmd at ${fpath} is missing a required "data" or "execute" property.`.yellow);
    }
}
message.channel.send('reloaded!')
    }
}