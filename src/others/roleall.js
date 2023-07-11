const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName("role")
    .addSubcommand(sub => 
        sub.setName("all")
        .setDescription("gives a role to all people")
        .addRoleOption(option =>
            option.setName("role")
            .setDescription("the role to give")
            )),
    async execute(_client, interaction){
        const { options, guild, member } = interaction;

        const { permissions } = member;

        const members = await guild.members.fetch();
        const role = options.getRole("role");

        if(!permissions.has("Administrator")) return interaction.reply('no perms');

        await interaction.reply("Giving the role...");
        let people = 0;

        try {
            setTimeout(() => {
                members.forEach(async a => {
                    a.roles.add(role).catch((err) => {
                        return;
                    })
                    people++;

                    const embed = new EmbedBuilder()
                    .setColor("Blue")
                    .setTitle("Gave Roles!")
                    .setDescription(`role given successfully to ${people}`)
                })
            }, 100)
        } catch (err) {
            return;
        }

    }
}