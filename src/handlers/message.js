const { Collection } = require('discord.js')
const path = require('path')
const fs = require('fs')
const colors = require('colors')

module.exports= {
    execute: (client) => {
        console.log('0--------------| Message cmds'.blue)
const foldersPath = path.join(__dirname, '../commands/prefixed');
const cmdFiles = fs.readdirSync(foldersPath);
for (const file of cmdFiles) {
    const fpath = path.join(foldersPath, file);
    const cmd = require(`../commands/prefixed/${file}`);
        client.cmdsPrefixed.set(cmd.data.name, cmd);
        cmd.data.aliases.map((thing) => {
            client.aliases.set(thing, cmd);
            console.log('loaded alias '+ thing)
        })
        console.log(`Loaded ${cmd.data.name} | ${cmd.category}`.green);
}
    }
}
// 4592