import { Collection } from 'discord.js';
import ping from './ping.js';
import cookie from './cookie.js';
import antispam from './antiSpam.js';
import bal from './bal.js';
import ball from './ball.js';
import bot from './bot.js';
import evalcmd from './eval.js';
import filecmd from './file.js';
import help from './help.js';
import hangman from './hangman.js';
import snake from './snake.js';

const arr: Array<any> = [
    ping,
    cookie,
    antispam,
    bal,
    ball,
    bot,
    evalcmd,
    filecmd,
    help,
    snake,
    hangman
]

const file: any = {
    commands: new Collection(),
    aliases: new Collection(),
    cooldowns: new Collection()
} 

arr.forEach((val) => {
    file.commands.set(val.name, val);
    val.aliases.forEach((element: any) => {
        file.aliases.set(element, val)
    });
});


export default file;