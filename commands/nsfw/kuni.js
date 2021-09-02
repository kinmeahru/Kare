const superagent = require("snekfetch");
const Discord = require('discord.js')


const { error_color, success_color, warning_color, warning, success, error, music, music_color, volumee, main_color } = require('../../config.json')
const db = require('quick.db')
module.exports = {
  name: "kuni",
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

    superagent.get('https://nekos.life/api/v2/img/kuni')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Kuni")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})

    }
}
if(lang === 'it') {
      if(!message.channel.nsfw) {
      return message.reply({embed : {
				description : `${error} Questo canale non supporta contenuti nsfw!`,
				color : error_color
			}})
      
    } else {

    superagent.get('https://nekos.life/api/v2/img/kuni')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Kuni")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})

    }
}
if(lang === 'de') {
      if(!message.channel.nsfw) {
      return message.reply({embed : {
				description : `${error} Dieser Channel unterstützt keine NSFW-Inhalte`,
				color : error_color
			}})
      
    } else {

    superagent.get('https://nekos.life/api/v2/img/kuni')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Kuni")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})

    }
}
  }
}