import type { Client, Message } from 'discord.js';

export default {
    name: "cookie",
    aliases: ["cookies"],
    execute: (client: Client<boolean>, message: Message<boolean>, args: string[]) => {
        return message.reply("🍪")
    }
}