import { event, Events } from '../utils/index.js';
import Commands from '../commands/index.js';
import Client from '../structs/client.js';

export default event(Events.MessageCreate, ({ log }, msg: any) => {
    if(!msg.content.startsWith("c!")) return;

    const content = msg.content.slice(2).split(" ");
    const [command, ...args] = content;
    const cmd: any = Commands.commands.get(command);
    const alias: any = Commands.aliases.get(command);

    if(!cmd){
        if(!alias) return msg.reply("that command dosen't exist");
    }

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