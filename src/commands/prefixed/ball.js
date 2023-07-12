const { EmbedBuilder } = require('discord.js');

const cmd = {
    category: "fun",
    data: {
     name: "8ball",
     aliases: []
 },
  async execute(client, message, args) {
     const randomPick = answers[Math.floor(Math.random() * answers.length)];
     await message.reply({
         embeds: [
             new EmbedBuilder()
                 .setTitle('8ball')
                 .setDescription(`you asked for: \`${args.join(" ").replace("8ball ", "")}\`\nthe answer: ||${randomPick}||`)
                 .setColor('Random')
         ]
     });
 }
}

module.exports = cmd;