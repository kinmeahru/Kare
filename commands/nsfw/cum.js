const discord = require("discord.js");//
const akaneko = require('akaneko');
const { error_color, success_color, warning_color, warning, success, error, music, music_color, volumee, main_color } = require('../../config.json')
const db = require('quick.db');

module.exports = {
  name: "cum",
  aliases: [],
  category: "🔞nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    
    if(!message.channel.nsfw) {
      return message.reply({embed : {
				description : `${error} This channel doesn't support nsfw content!`,
				color : error_color
			}})
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor(main_color)
    akanekoSan.setImage(akaneko.nsfw.cum()).setFooter('Akimi')
    return message.channel.send(akanekoSan);
      
    }
}
if(lang === 'it') {
	if(!message.channel.nsfw) {
      return message.reply({embed : {
				description : `${error} Questo canale supporta contenuti nsfw!`,
				color : error_color
			}})
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor(main_color)
    akanekoSan.setImage(akaneko.nsfw.cum()).setFooter('Akimi')
    return message.channel.send(akanekoSan);
      
    }
}
if(lang === 'de') {
	if(!message.channel.nsfw) {
      return message.reply({embed : {
				description : `${error} Dieser Channel unterstützt keine NSFW-Inhalte`,
				color : error_color
			}})
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor(main_color)
    akanekoSan.setImage(akaneko.nsfw.cum()).setFooter('Akimi')
    return message.channel.send(akanekoSan);
      
    }
}
  }
}