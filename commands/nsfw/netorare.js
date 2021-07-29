const discord = require("discord.js");//
const akaneko = require('akaneko');
const { error_color, success_color, warning_color, warning, success, error, music, music_color, volumee } = require('../../config.json')
const db = require('quick.db')
module.exports = {
  name: "netorare",
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
				description : `${user} This channel doens't support nsfw content!`,
				color : error_color
			}})
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.netorare());
    return message.channel.send(akanekoSan);
      
    }
  }
if(lang === 'it') {
	   if(!message.channel.nsfw) {
      return message.reply({embed : {
				description : `${user} Questo canale non supporta contenuti nsfw!`,
				color : error_color
			}})
      
    } else {
    
    let akanekoSan = new discord.MessageEmbed()
    akanekoSan.setColor("RANDOM")
    akanekoSan.setImage(akaneko.nsfw.netorare());
    return message.channel.send(akanekoSan);
      
    }

}
	}
}