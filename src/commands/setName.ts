import type { Client, Message } from 'discord.js';

export default {
    name: "setname",
    owner: true,
    permissions: [],
    enabled: false,
    execute: (client: Client<boolean>, message: Message<boolean>, args: string[]) => {
        // implement.
    }
}