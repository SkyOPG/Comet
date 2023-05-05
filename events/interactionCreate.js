const { Events } = require('discord.js');
const colors = require('colors')

module.exports = {
	name: Events.InteractionCreate,
	async execute(client, interaction) {
		if (!interaction.isChatInputCommand()) return;

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`.red);
			return;
		}

		try {
			await command.execute(client, interaction).then(console.log(`${interaction.commandName} was run!`.green));
		} catch (error) {
			interaction.reply({ content: `there was an error running this command \n \`\`\`js${error}\`\`\``, ephemeral: true })
			console.error(`Error executing ${interaction.commandName}`.red);
		}
	},
};