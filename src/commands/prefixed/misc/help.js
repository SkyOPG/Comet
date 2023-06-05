const { EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js')

module.exports = {
    category: 'info',
    data: {
        name: 'help',
        aliases: ['h']
    },
    async execute(client, message, args){
        const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription('Comet is a multipurpose bot with many features, so go check them out!')
        const select = new StringSelectMenuBuilder()
        .setCustomId('helpmenu')
        .setPlaceholder('Select Something...')
        .addOptions(
            new StringSelectMenuOptionBuilder()
            .setLabel('mod')
            .setDescription('mod commands')
            .setValue('help-mod'),
new StringSelectMenuOptionBuilder()
            .setLabel('economy')
            .setDescription('economy commands')
            .setValue('help-economy'),
new StringSelectMenuOptionBuilder()
            .setLabel('levelling')
            .setDescription('levelling commands')
            .setValue('help-lvl'),
new StringSelectMenuOptionBuilder()
            .setLabel('miscanellous')
            .setDescription('miscanellous commands')
            .setValue('help-misc'),
new StringSelectMenuOptionBuilder()
            .setLabel('music')
            .setDescription('music commands')
            .setValue('help-music'),
new StringSelectMenuOptionBuilder()
            .setLabel('other')
            .setDescription('other commands')
            .setValue('help-other'),
            new StringSelectMenuOptionBuilder()
            .setLabel('fun')
            .setDescription('fun commands')
            .setValue('help-fun'),
            new StringSelectMenuOptionBuilder()
            .setLabel('info')
            .setDescription('info commands')
            .setValue('help-info'),
            new StringSelectMenuOptionBuilder()
            .setLabel('ai')
            .setDescription('ai commands')
            .setValue('help-ai')
            .setDefault(true)
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		message.reply({
			embeds: [embed],
			components: [row]
		})
    }
}