const { EmbedBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } = require('discord.js')

module.exports = {
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
            .setLabel('general')
            .setDescription('general commands')
            .setValue('help-general'),
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
        )
        const row = new ActionRowBuilder()
			.addComponents(select);

		message.reply({
			embeds: [embed],
			components: [row]
		})
    }
}