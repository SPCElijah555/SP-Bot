const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



 

     if(!message.member.hasPermission("SEND_MESSAGES")) return;

      const sayMessage = args.join(" ");

      message.delete().catch();

      message.channel.send("Watch this video to learn how to be extraordinarily lazy. :grinning: https://www.youtube.com/watch?v=uawcQ61Qlbk      As well as visit the link for your required tools to do so. :) https://mega.nz/#F!MwpBUQQZ");



}



module.exports.help = {

  name: "imlazy"

}
