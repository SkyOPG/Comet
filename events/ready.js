const { Events } = require('discord.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
        client.user.setPresence({ activities: [{ name: 'on DJS 14!' }], status: 'idle' });
		console.log(`Ready! Logged in as ${client.user.tag}`);
	},
};