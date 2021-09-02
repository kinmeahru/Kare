const { main_color } = require('../../config.json')
const Color = main_color;//
const Discord = require("discord.js");
const db = require('quick.db')

module.exports = {
  name: "jail",
  aliases: ["j"],
  category: "🖼Image",
  description: "Shows image of jail",
  usage: "jail <user>",
  run: async (client, message, args) => {
     var lang = await db.get(`language_${message.guild.id}`)
    if(!lang) lang = 'en'


    if(lang === 'en') {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Jail")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
  if(lang === 'it') {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Prigione")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
  if(lang === 'de') {
    const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Gefängnis")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/jail?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
  }
};