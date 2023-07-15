const economy = require('../../Schemas/economy');
const { EmbedBuilder } = require('discord.js');
const { error, initials } = require('../../funcs/embeds');

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

        const embed = new EmbedBuilder()
        .setTitle(`${user.username}'s Balance`)
        .addFields({ name: 'Stars', value: `\`\`\`\n${data.Stars}\n\`\`\`` },
                   { name: 'Tokens', value: `\`\`\`\n${data.Tokens}\n\`\`\`` },
                   { name: 'Power', value: `\`\`\`\n${data.Power}\n\`\`\`` },
                   { name: 'Hunger', value: `\`\`\`\n${data.Food}\n\`\`\`` })
        .setColor('Blue')

        message.channel.send({ embeds: [embed] })
    }
}