const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
bot.on("ready", async () => {
 console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
 bot.user.setActivity("bot things...", {type: "PLAYING"});

});

bot.on("message", async message => {
 if(message.author.bot) return;
 if(message.channel.type === "dm") return;

 let prefix = botconfig.prefix;
 let messageArray = message.content.split(" ");
 let cmd = messageArray[0];
 let args = messageArray.slice(1);
 let commandfile = bot.commands.get(cmd.slice(prefix.length));
 if(commandfile) commandfile.run(bot,message,args);

});

client.login(process.env.BOT_TOKEN);
