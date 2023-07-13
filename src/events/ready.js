const { Events } = require('discord.js');
const mongoose = require('mongoose');
const { mongo } = require('../../config.json');
const colors = require('colors')
const { getMembers } = require('../funcs/functions')

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
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
		setInterval(() => {
			let c = 0;
			client.guilds.cache.map((a) => {
				const b = Number(a.memberCount)
				c = b + c;
			})
            client.user.setPresence({ activities: [{ name: `${getMembers(client)} users`}], status: 'idle' });
        }, 12000)
	}
};