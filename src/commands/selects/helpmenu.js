const { StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: {
        id: 'helpmenu'
    },
    async execute(client, interaction){ 
        if(interaction.values[0] === 'help-fun'){
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

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        } else if(interaction.values[0] === 'help-info'){
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription('info')
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

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        } else if(interaction.values[0] === 'help-general'){
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription('general')
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

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }else if(interaction.values[0] === 'help-ai'){
            const embed = new EmbedBuilder()
        .setTitle('Help')
        .setDescription('`imagine` \n\`\`\`js\ngenerates an image based off of your imagination\`\`\`')
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

		await interaction.message.edit({
			embeds: [embed],
			components: [row]
		})
        }
    }
}
