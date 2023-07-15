const { Events } = require('discord.js');
const mongoose = require('mongoose');
const { mongo } = require('../../config.json');
const colors = require('colors')
const { getMembers } = require('../funcs/functions')

module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log('0-----------| Post Initialization'.blue)
		if(!mongo) return;

		await mongoose.connect(mongo, {
			keepAlive: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		})
		
		if(mongoose.connect){
			console.log('[PI] Database Initialized!'.green)
		}
		setTimeout(() => {
			console.log(`[INIT] Bot initialized`.green);
			console.log(`[INF] ${getMembers(client)} members and ${client.guilds.cache.size}`.green)
		}, 3500)
		setInterval(() => {
			let c = 0;
			client.guilds.cache.map((a) => {
				const b = Number(a.memberCount)
				c = b + c;
			})
            client.user.setPresence({ activities: [{ name: `${getMembers(client)} users`}], status: 'idle' });
        }, 12000)
		console.log("[PI] Cleaning up".green)
	}
};