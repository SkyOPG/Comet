import { event, Events } from '../utils/index.js';
import { ActivityType } from 'discord.js'

export default event(Events.ClientReady, ({ log }, client) => {
    client.user.setPresence({ activities: [{ name: "with typescript 1.5.6", type: ActivityType.Playing }] })
    return log("[Ready]", `logged in as ${client.user.username}`);
})