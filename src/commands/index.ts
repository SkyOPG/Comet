import { Collection } from 'discord.js';
import ping from './ping.js';
import cookie from './cookie.js';

const arr: Array<any> = [
    ping,
    cookie
]

const file: any = {
    commands: new Collection(),
    aliases: new Collection()
} 

arr.forEach((val) => {
    file.commands.set(val.name, val);
    val.aliases.forEach((element: any) => {
        file.aliases.set(element, val)
    });
});


export default file;