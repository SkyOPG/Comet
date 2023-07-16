const express = require('express');
const { BClient, getMembers } = require('../src/funcs/functions')
const router = express.Router();
const { discordLogin } = require('../config.json')
const bcl = BClient;
const User = require('../src/Schemas/dash/user.js')
const schema = require('../src/Schemas/Files')

// Dashboard
router.get('/', (req, res) => {
  const guilds = bcl.guilds.cache.size;
  const users = getMembers(bcl);
  const comands = bcl.commands.size;
  const pfp = bcl.user.displayAvatarURL();
  res.render('home', { guilds, users, comands, pfp });
});

// Guild selector, TODO: add the guilds to check :skull:
router.get('/guilds', (req, res) => {
  res.render('guilds');
});

router.get('/invite', (req, res) => {
  res.render('invite');
});

// Guild editor, TODO: cookie checks
router.get('/guilds/:guildId/edit', (req, res) => {
  const guildId = req.params.guildId;
  res.render('edit', { guildId });
});

router.get('/api/v1/files/:file', async (req, res) => {
  const file = req.params.file;
  const data = await schema.findOne({ Filename: file });
  if(data){
    if(data.FileData.isPrivate) return res.render("err");
    const src = data.FileData.Code;
    const code = src
    res.render('view', { code, file });
  } else {
    res.render("err");
  }
});

router.get("/dashboard", (_req, _res) => {})

router.get("/auth", (req, res) => {
  console.log(req.params)
  res.status(200).redirect(discordLogin)
})
router.get("/login", (req, res) => {
  res.render("err");
  let i = 0;
  let a = "forwards";
  while(i !== 10){
  console.log(req.params)
  if(a === "forwards"){
    if(i === 9){
      a = "backwards";
    } else {
      i++
    }
  } else {
    if(i === 0){
      a = "forwards";
    } else {
      i--;
    }
  }
}
  //res.status(200).redirect("/");
})

module.exports = router;
// https://localhost:3000