const Discord = require('discord.js')//
const { parse } = require("twemoji-parser");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
module.exports = {
    name: "add-these",
    category: "🛠moderation",
    usage: "For steal an  emoji from another server(mention the emoji with :)",
    run: async (client, message, args) => {
        
              var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
if (!message.member.hasPermission("MANAGE_EMOJIS")) {
return message.channel.send({embed : {
    description : `${error} You don't have permission to use this command!`,
    color : error_color
  }})
}
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis) return message.channel.send({embed : {
    description : `${error} Provide an emoji to add!`,
    color : error_color
  }});
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
            message.guild.emojis.create(
                `${Link}`,
                `${`${emoji.name}`}` 
            ).then(em => message.channel.send({embed : {
    description : em.toString() + `| Added!`,
    color : `RANDOM`  
  }})).catch(error => {
              message.channel.send(":x: | an Error occured")
                console.log(error)
})
          
        }
        })

        }
if(lang === 'it') {

  if (!message.member.hasPermission("MANAGE_EMOJIS")) {
return message.channel.send({embed : {
    description : `${error} Non hai i permessi per usare questo comando!`,
    color : error_color 
  }})
}
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis) return message.channel.send({embed : {
    description : `${error} Provvedi un emoji da aggiungere!`,
    color : error_color
  }});
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
            message.guild.emojis.create(
                `${Link}`,
                `${`${emoji.name}`}` 
            ).then(em => message.channel.send({embed : {
    description : em.toString() + `| Aggiunta!`,
    color : `RANDOM`  
  }})).catch(error => {
              message.channel.send(":x: | an Error occured")
                console.log(error)
})
          
        }
        })

}
if(lang === 'de') {

  if (!message.member.hasPermission("MANAGE_EMOJIS")) {
return message.channel.send({embed : {
    description : `${error} Sie haben keine Berechtigung, diesen Befehl zu verwenden!`,
    color : error_color 
  }})
}
        const emojis = args.join(" ").match(/<?(a)?:?(\w{2,32}):(\d{17,19})>?/gi)
        if (!emojis) return message.channel.send({embed : {
    description : `${error} Geben Sie ein Emoji zum Hinzufügen an!`,
    color : error_color
  }});
        emojis.forEach(emote => {
        let emoji = Discord.Util.parseEmoji(emote);
        if (emoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${emoji.id}.${
       emoji.animated ? "gif" : "png"
}`
            message.guild.emojis.create(
                `${Link}`,
                `${`${emoji.name}`}` 
            ).then(em => message.channel.send({embed : {
    description : em.toString() + `| Zusatz!`,
    color : `RANDOM`  
  }})).catch(error => {
              message.channel.send(":x: | an Error occured")
                console.log(error)
})
          
        }
        })

}
}
}



    