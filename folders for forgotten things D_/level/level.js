const db = require('quick.db')
const { getInfo } = require("../../handlers/xp.js")
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

const canvacord = require("canvacord");
const Discord = require("discord.js");
module.exports = {
  name: "rank",
  aliases: ["rnk", "rank"],
  description: "Get the level of Author or Mentioned",
  usage: "rank [user]",
  category: "⬆level",
  run: (client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { //IF BOT
      return message.channel.send({embed : {
				description  : `${success}I am on level 100`,
				color : success_color
							}})
    }
    
    if(user.bot) {
      return message.channel.send({embed : {
				description : `${error} Bot do not have level!`,
				color : error_color
			}})
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    
const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({dynamic: true,  format: 'png'}))
    .setCurrentXP(remxp)
    .setRequiredXP(levelxp)
    .setLevel(level, "Level#", true)
    .setStatus(user.presence.status)
    .setProgressBar("#862d86", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(1, "Rank#", true)
    .setBackground("IMAGE", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSk3Oi4uFx8/OD84NygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIApAAKAAAAAAAAgCgAAAAAAAAACAKAAAAAAAD/9k=");

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "automodRankcard.png");
        message.channel.send(attachment);
    });   
    
    
    
}
if(lang === 'it') {
	   const user = message.mentions.users.first() || message.author;
    
    if(user.id === client.user.id) { //IF BOT
      return message.channel.send({embed : {
				description  : `${success} Sono al livello 100`,
				color : success_color
							}})
    }
    
    if(user.bot) {
      return message.channel.send({embed : {
				description : `${error} I bot non hanno livelli!`,
				color : error_color
			}})
    }
    
    let xp = db.get(`xp_${user.id}_${message.guild.id}`) || 0;
    
    const {level, remxp, levelxp} = getInfo(xp);
    
const rank = new canvacord.Rank()
    .setAvatar(user.displayAvatarURL({dynamic: true,  format: 'png'}))
    .setCurrentXP(remxp)
    .setRequiredXP(levelxp)
    .setLevel(level, "Level#", true)
    .setStatus(user.presence.status)
    .setProgressBar("#862d86", "COLOR")
    .setUsername(user.username)
    .setDiscriminator(user.discriminator)
    .setRank(1, "Rank#", true)
    .setBackground("IMAGE", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITEhJSk3Oi4uFx8/OD84NygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALEBHAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAAAQf/xAAVEAEBAAAAAAAAAAAAAAAAAAAAAf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIApAAKAAAAAAAAgCgAAAAAAAAACAKAAAAAAAD/9k=");

rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, "automodRankcard.png");
        message.channel.send(attachment);
    });   
    
}
  }
}