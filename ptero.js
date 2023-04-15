// for pterodactyl panels
console.log('starting')
const sjs = require('shelljs')
const input = require('./node_modules/skyopg/node-input')
const fs = require('fs')
const path = require('path')
// getting ready
console.log('getting ready')
var files = [__dirname +'index.js', __dirname + 'deploy.js']
function inputChoice(...args){
    input.setTitle('Use Slash')
    input.description('Do you want to use Slash commands for this bot? (y/n)')
    input.accept(...args, true, false, false)
}
var files = fs[sjs.run(files)]
// asking
const choice = inputChoice(String)

if(choice === 'y'){
    sjs.run('deploy.js')
} else {
    files.run()
}