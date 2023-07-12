const economy = require('../../Schemas/economy')
const { error, initials } = require('../../funcs/embeds')

module.exports = {
    category: 'economy',
    data: {
        name: 'stars',
        aliases: ['bal', 'balance']
    },
    async execute(client, message, args){
        let user;
         user = message.author
        const data = await economy.findOne({ User: user.id })
        const { bal } = error;
        if(!data) return message.channel.send({ embeds: [bal] })

        const embed = initials.bal(user, data)

        message.channel.send({ embeds: [embed] })
    }
}