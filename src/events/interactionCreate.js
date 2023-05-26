const { Events } = require('discord.js');
const colors = require('colors')

module.exports = {
	name: Events.InteractionCreate,
	async execute(client, interaction) {
		if (interaction.isChatInputCommand()){

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`.red);
			return;
		}	
		

		try {
			await command.execute(client, interaction);
		} catch (error) {
			interaction.reply({ content: `there was an error running this command`, ephemeral: true })
			console.error(`Error executing ${interaction.commandName}`.red);
			console.error(error)
		}}else if (interaction.isButton()) {
			const button = interaction.client.button.get(interaction.customId);

		if (!button) {
			console.error(`No command matching ${interaction.customId} was found.`.red);
			return;
		}

		try {
			await button.execute(client, interaction);
		} catch (error) {
			interaction.reply({ content: `there was an error running this command`, ephemeral: true })
			console.error(`Error executing ${interaction.customId}`.red);
			console.error(error)
		}			
		} else if (interaction.isStringSelectMenu()) {
			const select = interaction.client.select.get(interaction.customId);

		if (!select) {
			console.error(`No select menu matching ${interaction.customId} was found.`.red);
			return;
		}

		try {
			await select.execute(client, interaction);
		} catch (error) {
			interaction.reply({ content: `there was an error running this select menu`, ephemeral: true })
			console.error(`Error executing ${interaction.customId}`.red);
			console.error(error)
		}
		}
	},
};