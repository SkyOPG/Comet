const { botStart } = require('./src/funcs/functions');
const express = require('express');
const cookie = require('cookie-parser')
const app = express();
const port = 3000;
const colors = require('colors');

async function main(){ 
    await botStart();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookie());
app.set('view engine', 'ejs');

// Routes
const indexRoute = require('./routes/index');
app.use('/', indexRoute);

// Start the server and login the bot
app.listen(port, () => {
  console.log('0--------------| Dashboard'.blue)
  console.log(`Dashboard running on localhost:${port}`);
});
}
main()