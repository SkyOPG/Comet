const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(client, interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(client, interaction);
		} catch (error) {
			interaction.reply({ content: 'there was an error running this command', ephemeral: true })
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
	},
};