const { EmbedBuilder } = require('discord.js')
const ping = 'ping'
const { name } = require('../discord.json')

module.exports = {
    data: {
        name: 'ping'
    },
    async execute(client, message){
        await message.reply('my ping is ' + client.ws.ping)
    }
}