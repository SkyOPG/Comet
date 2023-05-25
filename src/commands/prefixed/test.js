module.exports = {
    data: {
        name: "test",
        aliases: ['t', 'te', 'tes']
    },
    async execute(client, message, args){
        message.reply('w')
    }
}