const express = require('express');
const { BClient } = require('../src/funcs/functions')
const router = express.Router();
const bcl = BClient;
const User = require('../src/Schemas/dash/user.js')
let isLogged, code;



router.post('/dashboard', (req, res) => {
  const ip = req.ip;
  
  // Check if the IP is already logged in
  User.findOne({ ip: ip }, (err, user) => {
    if (err) {
      console.error(err);
      // Handle the error appropriately
    } else {
      if (user) {
        // IP is already logged in
        console.log('IP is already logged in:', ip);
      
        // Redirect or send a response indicating that the user is already logged in
      } else {
        // IP is not logged in
        console.log('IP is not logged in:', ip);
        res.redirect('/login')
        // Proceed with the login process
      }
    }
  });
});

// Dashboard
router.get('/dashboard', (req, res) => {
  const guilds = bcl.guilds.cache.size;
  const users = bcl.users.cache.size;
  const comands = bcl.commands.size;
  const pfp = bcl.user.displayAvatarURL();
  res.render('dash', { guilds, users, comands, pfp });
});

// Guild selector
router.get('/guilds', (req, res) => {
  res.render('guilds'); // Renders the guilds.ejs view
});

router.get('/invite', (req, res) => {
  res.render('invite');
});

// Guild editor
router.get('/guilds/:guildId/edit', (req, res) => {
  const guildId = req.params.guildId;
  res.render('edit', { guildId }); // Renders the edit.ejs view, passing the guildId as data
});

module.exports = router;