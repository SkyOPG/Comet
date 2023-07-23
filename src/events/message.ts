import { event, Events } from '../utils/index.js';
import { Collection } from 'discord.js';
import Commands from '../commands/index.js';
import Client from '../structs/client.js';

export default event(Events.MessageCreate, ({ log }, msg: any) => {
    if(!msg.content.startsWith("c!")) return;

    const content = msg.content.slice(2).split(" ");
    const [command, ...args]: string = content;
    const cmd: any = Commands.commands.get(command);
    const alias: any = Commands.aliases.get(command);

    if(!cmd){
        if(!alias) return msg.reply("that command dosen't exist");
    }

    if (!Commands.cooldowns.has(cmd.name)) {
        Commands.cooldowns.set(cmd.name, new Collection());
    }
    const now = Date.now();
    const timestamps = Commands.cooldowns.get(cmd.name);
    const defaultCooldownDuration = 3;
    const cooldownAmount = (cmd.cooldown ?? defaultCooldownDuration) * 1000;
    if (timestamps.has(msg.author.id)) {
        const expirationTime = timestamps.get(msg.author.id) + cooldownAmount;
    
        if (now < expirationTime) {
            const expiredTimestamp = Math.round(expirationTime / 1000);
            return msg.reply({ content: `Please wait, you are on a cooldown for \`${cmd.name}\`. You can use it again <t:${expiredTimestamp}:R>.` });
        }
    }
    timestamps.set(msg.author.id, now);
    setTimeout(() => timestamps.delete(msg.author.id), cooldownAmount);

    try {
        if(cmd){
            if(!cmd.enabled) return msg.channel.send("This command is disabled");
            if(cmd.owner){
                return msg.author.id === "849283841583743036" ? cmd.execute(Client, msg, args) : msg.channel.send("This is an owner-only command...")
            } else if(cmd.permissions.length > 0){
                const permissions = cmd.permissions
                for(const perm of permissions){
                    if(!msg.member.permissions.has(perm)) return msg.channel.send(`you don't have the required permission: ${perm}`)
                }
            }
            cmd.execute(Client, msg, args);
        } else if(alias){
            alias.execute(Client, msg, args);
        }
    } catch (err) {
        log("[Error]", err);
    }
})