const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
const db = require('quick.db');
//
module.exports = {
  name: "cry",
  category: "🖼Image",
  description: "Cry with gif",
  run: async (client, message, args) => {

         var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
    
    let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Please talk with ${message.author.username} they are crying`)
    .setTimestamp()
    
    message.channel.send(embed);
}
if(lang === 'it') {
   let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Perfavore parlate con ${message.author.username} sta piangendo!`)
    .setTimestamp()
    
    message.channel.send(embed);

}
if(lang === 'de') {
   let data = await random.getAnimeImgURL("cry");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`Bitte sprich mit ${message.author.username} sie weint!`)
    .setTimestamp()
    
    message.channel.send(embed);

}
  }
};