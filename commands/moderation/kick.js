const { MessageEmbed } = require("discord.js")//
const moment = require('moment')
const db = require('quick.db')
const { main_color, success_color, error_color, success, error } = require('../../config.json');
module.exports = {
name: "kick",
category: "🛠moderation",
description: "kick a user",
run: async(client, message, args) => {  

var lang = await db.get(`language_${message.guild.id}`)
if(!lang) lang = 'en'

if(lang === 'en') {




const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")


if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.lineReplyNoMention({embed : {
  description : `${error}I don't have permission`,
  color : error_color,

}});
         if (!message.member.hasPermission("KICK_MEMBERS"))
         return message.lineReplyNoMention({embed : {
           description : `${error}You don't have permission`,
           color : error_color,
        
         }})
        if (!mentionedMember) return message.lineReplyNoMention({embed : {
          description : `${error}Please specify a valid member`,
          color : error_color
        }})
        if (mentionedMember.id === message.author.id) return message.channel.send({embed : {
          description : `${error}Umm you can't kick yourself`,
          color : error_color
        }})
        
        if (mentionedMember.kickable) {
          
            const embed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success}Successfully kicked :
**Member:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Reason:** ${reason || "None"}

            `)
        message.lineReplyNoMention(embed)
        mentionedMember.kick()
        } else {
            return message.lineReplyNoMention({embed : {
              description : `${error}I was unable to kick this member please make sure my role is above theirs`,
              color : error_color
            }})
        }
       }


//italian
if(lang === 'it') {




const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")


if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.lineReplyNoMention({embed : {
  description : `${error}Non ho i permessi per farlo`,
  color : error_color,

}});
         if (!message.member.hasPermission("KICK_MEMBERS"))
         return message.lineReplyNoMention({embed : {
           description : `${error}Non hai i permessi per farlo`,
           color : error_color,
          
      
         }})
        if (!mentionedMember) return message.lineReplyNoMention({embed : {
          description : `${error}Perfavore specifica un utente valido`,
          color : error_color
        }})
        if (mentionedMember.id === message.author.id) return message.channel.send({embed : {
          description : `${error}Lol non puoi espellere te stesso`,
          color : error_color
        }})
        
        if (mentionedMember.kickable) {
          
            const embed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success}Espulso con successo:
**Utente:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Motivo:** ${reason || "Nessuno"}

            `)
        message.lineReplyNoMention(embed)
        mentionedMember.kick()
        } else {
            return message.lineReplyNoMention({embed : {
              description : `${error}Non sono riuscita ad espellere questo questo utente, assicurati che il mio ruolo sia superiore al suo`,
              color : error_color
            }})
        }
       }

if(lang === 'de') {




const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0])
const reason = args.slice(1).join(" ")


if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.lineReplyNoMention({embed : {
  description : `${error}Ich habe keine Erlaubnis dazu`,
  color : error_color,

}});
         if (!message.member.hasPermission("KICK_MEMBERS"))
         return message.lineReplyNoMention({embed : {
           description : `${error}Du hast dafür keine Rechte!`,
           color : error_color,
          
      
         }})
        if (!mentionedMember) return message.lineReplyNoMention({embed : {
          description : `${error}Bitte geben Sie einen gültigen Benutzer an`,
          color : error_color
        }})
        if (mentionedMember.id === message.author.id) return message.channel.send({embed : {
          description : `${error}Du kannst dich nicht selbst kicken`,
          color : error_color
        }})
        
        if (mentionedMember.kickable) {
          
            const embed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success}Erfolgreich vertrieben:
**Nutzer:** ${mentionedMember.user.username} - (${mentionedMember.user.id})
**Grund:** ${reason || "Niemand"}

            `)
        message.lineReplyNoMention(embed)
        mentionedMember.kick()
        } else {
            return message.lineReplyNoMention({embed : {
              description : `${error}Ich konnte diesen Benutzer nicht rauswerfen, bitte stelle sicher, dass meine Rolle höher ist als ihre`,
              color : error_color
            }})
        }
       }



        },
    };
