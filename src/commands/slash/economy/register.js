const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const economy = require('../../../Schemas/economy')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("register")
    .setDescription("register an account on Comet economy")
    .addStringOption(option =>
        option.setName("password")
        .setDescription("Your Comet Account Password (important)")
        .setRequired(true)),
    async execute(client, message){
        const data = await economy.findOne({ User: message.user.id })

        const msg = await message.reply('Please Wait...')

        if(data) return msg.edit({ content: '', embeds: [ 
            new EmbedBuilder().setTitle('Error').setDescription("You already registered, if you want to delete your economy account, please use `c!remove`").setColor('Red')
         ]});

        if(!data){
            economy.create({
                User: message.user.id,
                Stars: 0,
                Tokens: 0,
                Password: message.options.getString('password'),
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