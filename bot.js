const botSettings = require("./botSettings.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log('bot is ready! ${bot.user.username}');

  try{
    let link = await bot.GeneralInvite(["ADMINISTRATOR"]);
    console.log(link);
  } catch(e) {
    console.log(e.stack);
  }
});

bot.in("message", async message => {
  if(message.author.bot) return;
  if(message.)
});

bot.login(process.env.BOT_TOKEN);
