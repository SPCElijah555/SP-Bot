const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch();
      message.channel.send("```The mission of the community Affairs Unit is to conduct thorough, timely, and impartial investigations of alleged misconduct by the members of SADOS These investigations will be appropriately documented in a legal and ethical manner. The Community Affairs Unit is staffed by those chosen by C.Curtis-1R-01-Civ-1 exclusively. Additionally, the unit administratively investigates all rule breakings and double clanning reporting's. SADOS believes in the right of all persons to report potential misconduct by its members without fear of retaliation. Retaliation against any party to a complaint made to the Community or Internal Affairs Unit is prohibited. SAODS Administration will not tolerate retaliation and will take immediate disciplinary action against any member in violation of this policy. We take dual clanning extremely seriously. By attempting to double clan, you are only disrespecting your fellow members of SADOS. Rethink your actions.```");

}

module.exports.help = {
  name: "ca"
}