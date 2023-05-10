const sjs = require('shelljs')
const fs = require('fs')

console.log("hint: if you get the Error: Cannot find module './config.json' error, just make a file called config.json and fill it with the given details in https://github.com/SkyOPG/Comet")

if (fs.existsSync(dir)) {
    console.log('comet files exist, starting...')
    sjs.exec('cd Comet && npm install && node deploy && node .')
  } else {
    sjs.exec('git clone https://github.com/SkyOPG/Comet && cd Comet && npm install && node deploy && node .')
  }
