const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 
     if(!message.member.hasPermission("SEND_MESSAGES")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send("Please visit our website, it can be very beneficial. :wink: ");

}

module.exports.help = {
  name: "website"
}