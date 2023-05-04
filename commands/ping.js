const { EmbedBuilder } = require('discord.js')

module.exports = {
    data: {
        name: 'ping'
    },
    async execute(client, message){
        const db = client.db
        await db.set('test', { "test": "test" });
        await message.reply(db.get('test.test'));
    }
}