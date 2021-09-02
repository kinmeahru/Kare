const Discord = require ('discord.js')//
const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');


module.exports = {
name: "announce",
aliases: ["", "a"],
category: "🛠moderation",
usage: "embed #channel <text to say>",
description: "Returns provided text in Embed form.",
/**
 * @param {Client} client
 * @param {Message} message
 * @param {String[]} args
 */
run: async(client, message, args) => {
       var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
 if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply({embed : {
    description : `${error} You don't have permission for use this command!`,
    color : error_color
  }});
  
  let mention;

  if(!args.length) return message.channel.send({embed : {
    description : `${error} Usage: --announce <#channel> <messagge> <-ping>//Optional`,
    color : error_color
  }});

  const channel = message.mentions.channels.first();
  if(!channel) return message.reply({embed : {
    description : `${error} Please specify a channel!`,
    color : error_color
  }});

  if(!args[1]) return message.reply({embed : {
    description : `${error} Please specify a message to announce!`,
    color : error_color
  }});
   
  if(args.some((val) => val.toLowerCase() === '-ping')) {
    for (let i = 0; i < args.length; i++) {
      if(args[i].toLowerCase() === '-ping') args.splice(i, 1);



    }

     mention = true;
  } else mention = false;

if(mention === true) channel.send(`@everyone`);

channel.send(
  new MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
  .setDescription(args.slice(1).join(" "))
  .setTimestamp()
  .setColor('RANDOM')
)
}

if(lang === 'it') {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply({embed : {
    description : `${error} Non hai i permessi per usare questo comando!`,
    color : error_color
  }});
  
  let mention;

  if(!args.length) return message.channel.send({embed : {
    description : `${error} Utilizzo: --announce <#channel> <messaggio> <-ping>//Optional`,
    color : error_color
  }});

  const channel = message.mentions.channels.first();
  if(!channel) return message.reply({embed : {
    description : `${error} Perfavore specifica un canale!`,
    color : error_color
  }});

  if(!args[1]) return message.reply({embed : {
    description : `${error} Perfavore specifica un messaggio da annunciare!`,
    color : error_color
  }});
   
  if(args.some((val) => val.toLowerCase() === '-ping')) {
    for (let i = 0; i < args.length; i++) {
      if(args[i].toLowerCase() === '-ping') args.splice(i, 1);



    }

     mention = true;
  } else mention = false;

if(mention === true) channel.send(`@everyone`);

channel.send(
  new MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
  .setDescription(args.slice(1).join(" "))
  .setTimestamp()
  .setColor('RANDOM')
)

}
if(lang === 'de') {

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply({embed : {
    description : `${error} Sie haben keine Berechtigung, diesen Befehl zu verwenden!`,
    color : error_color
  }});
  
  let mention;

  if(!args.length) return message.channel.send({embed : {
    description : `${error} Verwendung: --announce <#channel> <message> <-ping> // Optional `,
    color : error_color
  }});

  const channel = message.mentions.channels.first();
  if(!channel) return message.reply({embed : {
    description : `${error} Bitte Kanal angeben!`,
    color : error_color
  }});

  if(!args[1]) return message.reply({embed : {
    description : `${error} Bitte geben Sie eine Nachricht an, um sie anzukündigen!`,
    color : error_color
  }});
   
  if(args.some((val) => val.toLowerCase() === '-ping')) {
    for (let i = 0; i < args.length; i++) {
      if(args[i].toLowerCase() === '-ping') args.splice(i, 1);



    }

     mention = true;
  } else mention = false;

if(mention === true) channel.send(`@everyone`);

channel.send(
  new MessageEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
  .setDescription(args.slice(1).join(" "))
  .setTimestamp()
  .setColor('RANDOM')
)

}
}
}

