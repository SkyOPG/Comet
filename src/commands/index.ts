import { Collection } from 'discord.js';
import ping from './ping.js';

const arr: Array<any> = [
    ping
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