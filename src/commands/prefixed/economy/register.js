const { EmbedBuilder } = require('discord.js')
const economy = require('../../../Schemas/economy')

module.exports = {
    category: 'economy',
    data: {
        name: 'register',
        aliases: ['reg']
    },
    async execute(client, message, args){
        const data = await economy.findOne({ User: message.author.id })
        if(args.length <= 0) return message.channel.send({ embeds: [
            new EmbedBuilder().setTitle('Error').setDescription("you didn't specify enough arguments\n```c!register <password>```").setColor('Red')
        ]});

        const msg = await message.channel.send('Please Wait...')

        if(data) return msg.edit({ content: '', embeds: [ 
            new EmbedBuilder().setTitle('Error').setDescription("You already registered, if you want to delete your economy account, please use `c!remove`").setColor('Red')
         ]});

        if(!data){
            economy.create({
                User: message.author.id,
                Stars: 0,
                Tokens: 0,
                Password: args[0],
                Items: {
                    Collectables: {
                        Common: [],
                        Uncommon: [],
                        Rare: [],
                        RarePlus: [],
                        Legenedary: [],
                        Space: [],
                        SpacePlus: [],
                        Universe: []
                    },
                    Sellables: {
                        Common: [],
                        Uncommon: [],
                        Rare: [],
                        RarePlus: [],
                        Legenedary: [],
                        Space: [],
                        SpacePlus: [],
                        Universe: []
                    }
                },
                Food: 100,
                Power: 100,
                Location: "StarLand",
                Badges: [],
                Multi: 1,
                Level: 0
            });
            msg.edit({ content: '', embeds: [
                new EmbedBuilder().setTitle("Successfully Registered").setDescription('you are now ready to start playing\ntip: when using the economy stats command do not click the red button in a public server, as it has your account destruction password (finding a better idea soon)').setColor("Green")
            ] })
        }
    }
}