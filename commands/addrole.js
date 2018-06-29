const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You do not have the permission to do this!.");
  if(args[0] == "help"){
    message.reply("Usage: !addrole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("I couldn't find that user!.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Please specify a role!");
  let gRole = (message.mentions.roles.first() || message.guild.roles.get(args[0]));
  if(!gRole) return message.reply("Couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("This person already has that role!");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`The role ${gRole.name} has been given to <@${rMember.id}}>`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name}.`)
  }
}

module.exports.help = {
  name: "addrole"
}