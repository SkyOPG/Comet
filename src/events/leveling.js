const { Events, EmbedBuilder } = require('discord.js')
const scema = require('../Schemas/level')
function randomItem(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    return item;
}
module.exports = {
    name: Events.MessageCreate,
    async execute(client, message){

const { guild, author, channel } = message;
const give = 5;

if(!guild || author.bot) return;

scema.findOne({ Guild: guild.id, User: author.id}, async (err, data) => {
    if(err) throw err;

    if(!data){
        scema.create({
            Guild: guild.id,
            User: author.id,
            XP: 0,
            Level: 0,
            Background: "https://cdn.discordapp.com/attachments/1081881878304395374/1105849988292030598/1232869.jpg",
            FullXP: 0,
            SaveXP: true,
            Enabled: true
        })
    }
})

const data = await scema.findOne({ Guild: guild.id, User: author.id});

if(!data) return;

const requiredXP = data.Level * data.Level * 20 + 20;

if(data.XP + give >= requiredXP){

    data.XP += give;

    data.Level += 1;

    data.FullXP += give;

    await data.save()

    const lvl = data.Level;

    if(!channel) return;

    const lvlUpMsgs = [`yay! you made it to level ${lvl}!`, `Hooray! you leveled up to level ${lvl}`, `Good job! you made it to level ${lvl}`, `NAILED IT! you leveled up to level ${lvl}`]

    const embed = new EmbedBuilder()
    .setTitle("levelup!")
    .setDescription(randomItem(lvlUpMsgs))
    .setFooter({text: 'Comet ☄️'});

    // channel.send({embeds: [embed]})
} else {
    data.XP += give;
    data.FullXP += give;
    data.save()
}

}
}