const { Collection } = require('discord.js')
const path = require('path')
const fs = require('fs')
const colors = require('colors')

module.exports={
    execute(client){
    console.log('0--------------| Select Menus'.blue)
    client.select = new Collection()
selectsPath = path.join(__dirname, '../commands/selects');
selectFiles = fs.readdirSync(selectsPath).filter(file => file.endsWith('.js'));
for (const file of selectFiles) {
    const filpath = path.join(selectsPath, file);
    const select = require(filpath);
    if ('data' in select && 'execute' in select) {
        client.select.set(select.data.id, select);
        console.log(`Loaded ${select.data.id}`.green);
    } else {
        console.log(`[WARNING] The select at ${filpath} is missing a required "data" or "execute" property.`.yellow);
    }
}}
}