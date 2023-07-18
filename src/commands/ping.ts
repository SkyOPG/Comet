import type { Client, Message } from 'discord.js';

export default {
    name: "ping",
    aliases: ["p"],
    owner: false, // TODO: add owner flag
    enabled: true, // TODO: add enabled flag
    permissions: [], // TODO: type checking for permissions
    execute: (_client: Client<boolean>, message: Message<boolean>, _args: string[]) => {
        return message.reply("pong");
    }
}