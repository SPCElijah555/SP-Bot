const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 
     if(!message.member.hasPermission("SEND_MESSAGES")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send("https://docs.google.com/document/d/1uzNVcbQvGboobnNDQ6st710M_UNMkXRRmEaTLwOI9sE/edit           Go read them, it will only benefit you. 😉 ");

}

module.exports.help = {
  name: "rules"
}