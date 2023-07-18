import { event, Events } from '../utils/index.js';
import Commands from '../commands/index.js';
import Client from '../structs/client.js';

export default event(Events.MessageCreate, ({ log }, msg) => {
    if(!msg.content.startsWith("c!")) return;

    const content = msg.content.slice(2).split(" ");
    const [command, ...args] = content;
    const cmd: any = Commands.commands.get(command);
    const alias: any = Commands.aliases.get(command);

    if(!cmd){
        if(!alias) return msg.reply("that command dosen't exist");
    }

    try {
        if(cmd)
        cmd.execute(Client, msg, args);
        if(alias)
        alias.execute(Client, msg, args);
    } catch (err) {
        log("[Error]", err);
    }
})