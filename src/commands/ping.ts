import type { Client, Message } from 'discord.js';

export default {
    name: "ping",
    aliases: ["p"],
    owner: false,
    enabled: true, // TODO: add enabled flag
    permissions: [],
    execute: (_client: Client<boolean>, message: Message<boolean>, _args: string[]) => {
        return message.reply("pong");
    }
}