const { EmbedBuilder } = require('discord.js')
const economy = require('../../../Schemas/economy')
const { error, initials } = require('../../../funcs/embeds')

module.exports = {
    category: 'economy',
    data: {
        name: 'stars',
        aliases: ['bal', 'balance']
    },
    async execute(client, message, args){
        let user;
        if(!message.mentions.members.first()){ user = message.author } else { user = message.mentions.members.first() }
        const data = await economy.findOne({ User: user.id })
        const { bal } = error;
        if(!data) return message.channel.send({ embeds: [bal] })

        const embed = initials.bal(user, data)

        message.channel.send({ embeds: [embed] })
    }
}