const Color = "RANDOM";
const Discord = require("discord.js");
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
//
module.exports = {
  name: "smartcat",
  aliases: ["laughingcat", "sc"],
  category: "🖼Image",
  description: "Return A Smart Cat Image!",
  usage: "Smartcat <Mention Or ID>",
  run: async (client, message, args) => {
      var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
    
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send({embed : {
    description : `${error} Please mention an user!`,
    color : error_color
  }})

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/womanyellingatcat?woman=${Member.user.displayAvatarURL({ format: "png" })}&cat=${message.author.avatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
}
if(lang === 'it') {

 const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!Member) return message.channel.send({embed : {
    description : `${error} Perfavore menziona un utente!`,
    color : error_color
  }})

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setImage(encodeURI(`https://vacefron.nl/api/womanyellingatcat?woman=${Member.user.displayAvatarURL({ format: "png" })}&cat=${message.author.avatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);

}
  }
};
