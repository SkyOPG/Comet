const { REST, Routes } = require('discord.js');
const { clientId, token } = require('../../config.json');
const fs = require('fs');
const path = require('path');
const colors = require('colors')

module.exports = { 
  deploy:function(){
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
    },
  clid: function(directoryPath) {
  let lineCount = 0;

  function countLinesInFile(filePath) {
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContents.split('\n');
    lineCount += lines.length;
  }
  function traverseDirectory(directoryPath) {
    const files = fs.readdirSync(directoryPath);
    files.forEach(file => {
      const filePath = path.join(directoryPath, file);
      const fileStats = fs.statSync(filePath);

      if (fileStats.isFile()) {
        countLinesInFile(filePath);
      } else if (fileStats.isDirectory()) {
        traverseDirectory(filePath);
      }
    });
  }
  traverseDirectory(directoryPath);
  return lineCount;
},
randomItem: function(arr) {

  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  return item;
},
pathify: function(path){
  const map = path.map(function(element){
    const replace = element.replace('skull', "https://cdn.discordapp.com/attachments/1081881878304395374/1109253298021744660/skull.png").replace("comet", "./comet.png").replace("potato", "./potato.png")
    return replace;
})
return map;
},
getGuildQueue: async function(client, message){
  const data = await client.player.getQueue(message.guild.id);
  return data;
}
}