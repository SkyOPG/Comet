const { Events } = require('discord.js');
const mongoose = require('mongoose');
const { mongo } = require('../config.json');
const colors = require('colors')

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
        client.user.setPresence({ activities: [{ name: 'on DJS 14!' }], status: 'idle' });
		console.log(`Ready! Logged in as ${client.user.tag}`.blue);

		console.log('0--------------| Database'.blue)
		if(!mongo) return;

		await mongoose.connect(mongo, {
			keepAlive: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		
		if(mongoose.connect){
			console.log('[DB] Up and Running!'.green)
		}
	},
};