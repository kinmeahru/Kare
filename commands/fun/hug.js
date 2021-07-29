const discord = require("discord.js");
const { Random } = require("something-random-on-discord");
const random = new Random();
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
//
module.exports = {
  name: "hug",
  category: "🖼Image",
  description: "Hug someone",
  run: async (client, message, args) => {

    var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
  
    
    let target = message.mentions.members.first()

    if(!target) return message.channel.send({embed : {
    description : `${error} Please mention an user to hug!`,
    color : error_color
  }})
    
    let data = await random.getAnimeImgURL("hug");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} hugs ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);
}
if(lang === 'it') {


     let target = message.mentions.members.first()

     if(!target) message.channel.send({embed : {
    description : `${error} Perfavore menziona un utente da abbracciare!`,
    color : error_color
  }})
    
    let data = await random.getAnimeImgURL("hug");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} abbraccia ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);

}
if(lang === 'de') {


     let target = message.mentions.members.first()

     if(!target) message.channel.send({embed : {
    description : `${error} Bitte erwähnen Sie einen Benutzer zum Umarmen!`,
    color : error_color
  }})
    
    let data = await random.getAnimeImgURL("hug");
    
    let embed = new discord.MessageEmbed()
    .setImage(data)
    .setColor("RANDOM")
    .setFooter(`${message.author.username} Umarmt ${target.user.username}`)
    .setTimestamp()
    
    message.channel.send(embed);

}
  }
};