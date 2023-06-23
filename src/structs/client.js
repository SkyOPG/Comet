const { Client, Partials, Collection, REST, Routes } = require("discord.js");
const { Channel, GuildMember, GuildScheduledEvent, Message, Reaction, ThreadMember, User } = Partials;
const { Player } = require('discord-music-player');
const fs = require('fs')
const path = require('path')
const { token, clientId } = require('../../config.json')

module.exports = {
    BotClient: class extends Client {
        constructor(options) {
            super({
                intents: 3276799,
                        partials: [
                          Channel,
                          GuildMember,
                          GuildScheduledEvent,
                          Message,
                          Reaction,
                          ThreadMember,
                          User,
                        ],
                    fetchAllMembers: true }); 
            this.deploy = () => {
                    console.log('0-----------| Slash Register'.blue)
                    const commands = [];
                    const foldersPath = path.join(__dirname, '../commands/slash');
                    const commandFolders = fs.readdirSync(foldersPath);
                    
                    for (const folder of commandFolders) {
                      const commandsPath = path.join(foldersPath, folder);
                      const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
                      for (const file of commandFiles) {
                        const filePath = path.join(commandsPath, file);
                        const command = require(filePath);
                        if ('data' in command && 'execute' in command) {
                          console.log(`Loaded ${file}`.green)
                          commands.push(command.data.toJSON());
                        } else {
                          console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
                        }
                      }
                    }
                    
                    const rest = new REST().setToken(token);
                    
                    (async () => {
                      try {
                        console.log(`Started refreshing ${commands.length} application (/) commands.`.yellow);
                    
                        const data = await rest.put(
                          Routes.applicationCommands(clientId),
                          { body: commands },
                        );
                    
                        console.log(`Successfully reloaded ${data.length} application (/) commands.`.green);
                      } catch (error) {
                        console.error(error);
                      }
                    })()
                    }
            this.cmdsPrefixed = new Collection()
        this.aliases = new Collection()
        this.category = {
           ai: new Collection(),
           moderation: new Collection(),
           economy: new Collection(),
           fun: new Collection(),
           info: new Collection(),
           levelling: new Collection(),
           miscanellous: new Collection(),
            music: new Collection(),
            none: new Collection()
        }
        this.player = new Player(this, {
            leaveOnEmpty: false
        })
        this.player 
        .on('channelEmpty',  (queue) =>
            console.log(`Everyone left the Voice Channel, queue ended.`))
        .on('songAdd',  (queue, song) =>
            console.log(`Song ${song} was added to the queue.`))
        .on('playlistAdd',  (queue, playlist) =>
            console.log(`Playlist ${playlist} with ${playlist.songs.length} was added to the queue.`))
        .on('queueDestroyed',  (queue) =>
            console.log(`The queue was destroyed.`))    
        .on('queueEnd',  (queue) =>
            console.log(`The queue has ended.`))
        .on('songChanged', (queue, newSong, oldSong) =>
            console.log(`${newSong} is now playing.`))
        .on('songFirst',  (queue, song) =>
            console.log(`Started playing ${song}.`))
        .on('clientDisconnect', (queue) =>
            console.log(`I was kicked from the Voice Channel, queue ended.`))
        .on('clientUndeafen', (queue) =>
            console.log(`I got undefeanded.`))
        .on('songMoved', (queue, song, oldIndex, newIndex) =>
            console.log(`Song ${song} was moved from ${oldIndex} to ${newIndex}.`))
        .on('error', (error, queue) => {
            console.log(`Error: ${error} in ${queue.guild.name}`);
        });
            
        }
    }
}