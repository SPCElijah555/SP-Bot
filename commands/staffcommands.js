const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 
     if(!message.member.hasPermission("MANAGE_MEMBERS")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      
      let staffcommandsEmbed = new Discord.RichEmbed()
      .setDescription("Staff Commands")
      .setColor("#00395F")
      .addField("!sp-Clear <Number of messages you wish to clear>")
      .addField("!sp-kick <Member> <Reason>")
      .addField("!sp-ban <Member> <Reason>")
      .addField("!sp-say <YourMessage>")
      .addField("!sp-timer <Time `h, m, or s`")
      .addField("!sp-warn <User> <Reason>")
      .addField("!sp-tempmute <User> <Reason>")
      .addField("!sp-warnlevel <User>")
      .addField("!sp-addrole <User> <Role>")
      .addField("!sp-lockdown <Seconds>");

      let staffcommandschannel = message.channel.send;
      
  
  
      message.delete().catch(O_o=>{});
      staffcommandschannel.send(staffcommandsEmbed);
  

}

module.exports.help = {
  name: "staffcommands"
}