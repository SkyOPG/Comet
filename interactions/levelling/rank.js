const { SlashCommandBuilder, EmbedBuilder, AttachmentBuilder } = require('discord.js')
const scema = require('../../Schemas/level')
const Canvacord = require('canvacord')

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rank')
    .setDescription('check your/somene\'s rank')
    .addUserOption(option => option.setName('user').setDescription('the user you want to get').setRequired(false)),
    async execute(client, interaction){

        await interaction.deferReply()

        try {

        const { user, guild, options } = interaction;

        const Member = options.getMember('user') || user;
        const member = guild.members.cache.get(Member.id)

        const Data = await scema.findOne({ Guild: guild.id, User: member.id});

        const errEmbed = new EmbedBuilder()
        .setTitle('Error')
        .setDescription('This person hasn\'t gained any XP yet');

        if (!Data) return await interaction.editReply({embeds: [errEmbed]});

        

        const requiredXP = Data.Level * Data.Level * 20 + 20;

        const rank = new Canvacord.Rank()
        .setAvatar(member.displayAvatarURL({ forcestatic: true}))
        .setBackground("IMAGE", "https://cdn.discordapp.com/attachments/1081881878304395374/1105849988292030598/1232869.jpg")
        .setCurrentXP(Data.XP)
        .setRequiredXP(requiredXP)
        .setRank(1, "RANK", false)
        .setLevel(Data.Level, "LEVEL")
        .setUsername(member.user.username)
        .setDiscriminator(member.user.discriminator);

        const Card = await rank.build();

        const hmm = new AttachmentBuilder(Card, { name: "rank.png" })

        const embed = new EmbedBuilder()
        .setTitle(`${member.user.username}'s rank card`)
        .setImage("attachment://rank.png");

        await interaction.editReply({ embeds: [embed], files: [hmm]})
        }catch(err){
        }
    }
}