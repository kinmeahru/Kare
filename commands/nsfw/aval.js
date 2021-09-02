const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();
const config = require("../../config.json")
const db = require('quick.db')
const { error_color, error, main_color } = require('../../config.json') 
module.exports = {
  name: "ranal",
  category: "🔞 NSFW Commands",
  usage: "ranal",
  run: async (client, message, args) => {
    	var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {

  var errMessage = ({embed : {
    description : `${error} This channel doesn't support nsfw content!`,
    color : error_color
  }})
  if (!message.channel.nsfw) {
     

      return message.reply(errMessage)
    
      
  }
  var superagent = require('superagent');

  if (!message.channel.nsfw) return message.channel.send(errMessage) 

  var lo = new Discord.MessageEmbed()
              .setDescription(`Please wait... `)
              .setTimestamp().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)

  message.channel.send(lo).then(m => {

      superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

          var embed_nsfw = new Discord.MessageEmbed()
              .setDescription(`:underage:\n**[image not loading? click here](${response.body.message})**`)
              .setTimestamp().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
              .setImage(response.body.message)
          
          m.edit(embed_nsfw);
      });
  });
  
}
if(lang === 'it') {
  var errMessage = ({embed : {
    description : `${error} Questo canale non supporta contenuti nsfw!`,
    color : error_color
  }})
  if (!message.channel.nsfw) {
     

      return message.reply(errMessage)
    
      
  }

  var superagent = require('superagent');

  if (!message.channel.nsfw) return message.channel.send(errMessage) 

  var lo = new Discord.MessageEmbed()
              .setDescription(`Perfavore aspetta... `)
              .setTimestamp().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)

  message.channel.send(lo).then(m => {

      superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

          var embed_nsfw = new Discord.MessageEmbed()
              .setDescription(`:underage:\n**[L'immagine non carica? Clicca qui](${response.body.message})**`)
              .setTimestamp().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
              .setImage(response.body.message)
          
          m.edit(embed_nsfw);
      });
  });
  
}
if(lang === 'de') {
    var errMessage = ({embed : {
    description : `${error} Dieser Channel unterstützt keine NSFW-Inhalte`,
    color : error_color
  }})
  if (!message.channel.nsfw) {
     

      return message.reply(errMessage)
    
      
  }

  var superagent = require('superagent');

  if (!message.channel.nsfw) return message.channel.send(errMessage) 

  var lo = new Discord.MessageEmbed()
              .setDescription(`Warten Sie mal... `)
              .setTimestamp().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)

  message.channel.send(lo).then(m => {

      superagent.get('https://nekobot.xyz/api/image').query({ type: 'anal'}).end((err, response) => {

          var embed_nsfw = new Discord.MessageEmbed()
              .setDescription(`:underage:\n**[Bild lädt nicht? Hier klicken](${response.body.message})**`)
              .setTimestamp().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
              .setImage(response.body.message)
          
          m.edit(embed_nsfw);
      });
  });
  
}
  }
};