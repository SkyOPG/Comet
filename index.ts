const { botStart } = require('./src/funcs/functions');
const express = require('express');
const app = express();
const port = 3000;

async function main(){ 
    await botStart();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
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