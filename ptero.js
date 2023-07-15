const sjs = require('shelljs')
const fs = require('fs')

console.log("hint: if you get the Error: Cannot find module './config.json' error, just make a file called config.json and fill it with the given details in https://github.com/SkyOPG/Comet")

if (fs.existsSync(dir)) {
    console.log('comet files exist, starting...')
    sjs.exec('cd Comet && npm install && node deploy && node .')
  } else {
    sjs.exec('git clone https://github.com/SkyOPG/Comet && cd Comet && npm install && node deploy && node .')
  }


  // let prefix = await client.db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = client.prefix;
  if(client.db.get(`noprefix_${message.author.id}`)){
    if(message.content.startsWith(prefix)){
      if(prefix === client.prefix){
        prefix = client.prefix;
      }
    }  else {
      prefix = "";
    }
  }
  let prefix = await client.db.get(`prefix_${message.guild.id}`);
  prefix = prefix ? prefix : client.prefix; 
  if(!client.db.get(`noprefix_${message.author.id}`) || client.db.get(`noprefix_${message.author.id}`) === null){ if(!message.content.startsWith(prefix)) return;}
  const args = np.includes(message.author.id) == false ? message.content.slice(prefix.length).trim().split(/ +/) :  message.content.startsWith(prefix) == true ? message.content.slice(prefix.length).trim().split(/ +/) : message.content.trim().split(/ +/);