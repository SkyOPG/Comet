const { Collection } = require('discord.js')
const path = require('path')
const fs = require('fs')
const colors = require('colors')

module.exports={
    execute(client){
        console.log('0--------------| Message cmds'.blue)
    const foldersPath = path.join(__dirname, '../commands/prefixed');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
cmdsPath = path.join(foldersPath, folder);
cmdFiles = fs.readdirSync(cmdsPath).filter(file => file.endsWith('.js'));
for (const file of cmdFiles) {
    const fpath = path.join(cmdsPath, file);
    const cmd = require(fpath);
    if ('data' in cmd && 'execute' in cmd) {
        client.cmdsPrefixed.set(cmd.data.name, cmd);
        if(cmd.category === "ai"){
            client.category.ai.set(cmd.data.name, cmd);
        } else if(cmd.category === "moderation"){
            client.category.moderation.set(cmd.data.name, cmd);
        } else if(cmd.category === "economy"){
            client.category.economy.set(cmd.data.name, cmd);
        } else if(cmd.category === "fun"){
            client.category.fun.set(cmd.data.name, cmd);
        } else if(cmd.category === "info"){
            client.category.info.set(cmd.data.name, cmd);
        } else if(cmd.category === "levelling"){
            client.category.levelling.set(cmd.data.name, cmd);
        } else if(cmd.category === "music"){
            client.category.music.set(cmd.data.name, cmd);
        } else if(cmd.category === "misc"){
            client.category.miscanellous.set(cmd.data.name, cmd);
        } else {
            client.category.none.set(cmd.data.name, cmd);
        }
        cmd.data.aliases.map((thing) => {
            client.aliases.set(thing, cmd);
            console.log('loaded alias '+ thing)
        })
        console.log(`Loaded ${cmd.data.name} | ${cmd.category}`.green);
    } else {
        console.log(`[WARNING] The cmd at ${fpath} is missing a required "data" or "execute" property.`.yellow);
    }
}
    }
}
}