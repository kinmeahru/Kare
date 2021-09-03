const superagent = require("node-fetch");
const Discord = require('discord.js')
const { error, error_color, main_color } = require("../../config.json")
const rp = require('request-promise-native');
const config = require("../../config.json")
const db = require('quick.db')
module.exports = {
    name: "rboobs",
    category: "🔞 NSFW Commands",
  description: "Sends boobs",
  usage: "boobs",
  run: async (client, message, args, level) => {
      var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
  //command

  //Checks channel for nsfw
  var errMessage = ({embed : {
    description : `${error} This channel doesn't support nsfw content!`,
    color : error_color
  }})
  if (!message.channel.nsfw) {
   

      return message.reply(errMessage)
     
      
  }

  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const boobs = new Discord.MessageEmbed()
      .setTitle("Real Boobs")
      .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(boobs);
});
  }
  if(lang === 'it') {
    
  //Checks channel for nsfw
  var errMessage = ({embed : {
    description : `${error} Questo canale non supporta contenuti nsfw!`,
    color : error_color
  }})
  if (!message.channel.nsfw) {
   

      return message.reply(errMessage)
     
      
  }

  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const boobs = new Discord.MessageEmbed()
      .setTitle("Tette vere")
      .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(boobs);
});
  }

  if(lang === 'de') {
    
  //Checks channel for nsfw
  var errMessage = ({embed : {
    description : `${error} Dieser Channel unterstützt keine NSFW-Inhalte`,
    color : error_color
  }})
  if (!message.channel.nsfw) {
   

      return message.reply(errMessage)
     
      
  }

  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const boobs = new Discord.MessageEmbed()
      .setTitle("Echte Brüste")
      .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])


    message.channel.send(boobs);
});
  }
  }

}