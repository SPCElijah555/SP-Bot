const ms = require("ms");
const config = require ("../botconfig.json");
exports.run = (client, message, args) => {
if (!message.guild.member(message.author).hasPermission("MANAGE_SERVER")) return message.channel.send("You do not have the permission!")
  if (!client.lockit) client.lockit = [];
  let time  = args.join(" ");
  let validUnlocks = ["release", "unlock" , "rel" , "ul"];
  const perms = message.member.hasPermission("MANAGE_MESSAGES");
 if (!perms) return message.channel.send("You do not have the permission!")
  if (!time) return message.channel.send("Please specify how long in either `hours, minutes` or `seconds`.");

    if (message.author.id === config.ownerid) {
message.channel.overwritePermissions(message.author, {
  SEND_MESSAGES: true
})}
  
  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.send("Lockdown lifted.");
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`Channel locked down for ${ms(ms(time), { long:true })}`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.send("Lockdown lifted.")).catch(console.error);
          delete client.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ld"],
  type: "Channels",
  permLevel: 0
};

exports.help = {
  name: "lockdown",
  description: "This will lock a channel down for the set duration, be it in hours, minutes or seconds.",
  usage: "lockdown <duration>"
};