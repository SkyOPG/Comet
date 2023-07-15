const { Collection } = require('discord.js')
const path = require('path')
const fs = require('fs')
const colors = require('colors')

module.exports={
    execute(client){
        console.log('0--------------| Buttons'.blue)
    client.button = new Collection()
btnsPath = path.join(__dirname, '../commands/buttons');
btnFiles = fs.readdirSync(btnsPath).filter(file => file.endsWith('.js'));
for (const file of btnFiles) {
    const fipath = path.join(btnsPath, file);
    const btn = require(fipath);
    if ('data' in btn && 'execute' in btn) {
        client.button.set(btn.data.id, btn);
    } else {
        console.log(`[WARNING] The btn at ${fipath} is missing a required "data" or "execute" property.`.yellow);
    }
}
console.log(`[BTNS] Loaded ${client.button.size} buttons`.green);
    }
}