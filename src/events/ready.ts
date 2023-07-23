import { event, Events } from '../utils/index.js';
import { ActivityType } from 'discord.js';
import mongoose from 'mongoose';
import type { ConnectOptions } from 'mongoose';
import keys from '../keys.js';

export default event(Events.ClientReady, async ({ log }, client) => {
    const options = {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions;

    await mongoose.connect(keys.mongoURI, options)
    log("[DB]", "Running!");

    client.user.setPresence({ activities: [{ name: "c!help", type: ActivityType.Playing }] })
    return log("[Ready]", `logged in as ${client.user.username}`);
})