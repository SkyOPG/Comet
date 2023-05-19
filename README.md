# Comet
Comet is an advanced multifunctional bot
# depenedcies
- axios
- discord.js
- colors
- mongoose
- canvacord
# usage
to use this bot:
make a file called `config.json` and put this inside it
```js
{
   "token": "bot token",
   "clientId": "bot id",
   "prodiac": "prodia api key",
   "mongo": "your mongodb url"
}
```
- in console 'npm run start'
# contribute
- fork the bot
- do your changes
- wait for it to get accepted/denied
# Pterodactyl
To use Comet on a pterodactyl panel you need the following npm packages:
- shelljs

then you need to copy the code in [ptero.js](https://github.com/SkyOPG/Comet/blob/main/ptero.js) and make a new file called index.js in your pterodactyl server
run your pterodactyl server
go to the folder called `Comet` and make a new file called `config.json` with this info (make sure you put the right information):
```js
{
   "token": "bot token",
   "clientId": "bot id",
   "prodiac": "prodia api key",
   "mongo": "your mongodb url"
}
```
then run the server once more, and you're good to go!
