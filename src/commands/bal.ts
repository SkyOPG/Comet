import economy from '../utils/Schemas/economy.js';
import { EmbedBuilder } from 'discord.js';

export default {
    name: 'stars',
    aliases: ['bal', 'balance'],
    owner: false,
    permissions: ["SendMessages"],
    enabled: true,
    async execute(client, message, args){
        let user;
         user = message.author
        const data: any = await economy.model.findOne({ User: user.id })
        const error = new EmbedBuilder()
        .setTitle('Error')
        .setDescription("you are not registered yet, please use `c!register` first!")
        .setColor('Red')
        if(!data) return message.channel.send({ embeds: [error] })

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