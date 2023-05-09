const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const test = require('../../Schemas/test')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('test')
    .setDescription('DB test'),
    async execute(client, interaction){
        const { guild, user } = interaction

        test.findOne({ GuildId: guild.id, UserId: user.id}, async (err, data) => {
            if(err) throw err;

            if(!data){
                test.create({
                    GuildId: guild.id,
                    UserId: user.id
                })
            }

            if(data){
                const user = data.UserId;
                const guild = data.GuildId;

                console.log({user, guild})
            }
        })
    }
}