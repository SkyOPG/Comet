const { EmbedBuilder } = require('discord.js')

module.exports = {
    error: {
        bal: new EmbedBuilder()
        .setTitle('Error')
        .setDescription("you are not registered yet, please use `c!register` first!")
        .setColor('Red')
    },
    initials: {
        bal: async (user, data) => {
            new EmbedBuilder()
            .setTitle(`${user.id}'s Balance`)
            .addFields({ name: 'Stars', value: `\`${data.Stars}\`` },
                       { name: 'Tokens', value: `\`${data.Tokens}\`` },
                       { name: 'Power', value: `\`${data.Power}\`` },
                       { name: 'Hunger', value: `\`${data.Food}\`` })
            .setColor('Blue')
        }
    }
}