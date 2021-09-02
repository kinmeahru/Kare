const { Client, Message, MessageEmbed } = require("discord.js");
const {succes,error,main_color,success_color,error_color} = require('../../config.json');
const db = require('quick.db')
module.exports = {
  name: "resetnick",
  category: '🛠moderation',
  aliases: ["rn"],  


  run: async (client, message, args) => {

var lang = await db.get(`language_${message.guild.id}`)
if(!lang) lang = 'en'

if(lang === 'en') {
    const member = message.mentions.members.first();
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error}You don't have permission`,
      color : error_color,
    
      
           }});

        if(!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error}I don't have permission`,
      color : error_color,
     
      
           }});       



    if (!member) return message.lineReplyNoMention({embed :{
      description : `${error}Please specify a valid member`,
      color : error_color
    }});

    try {
      member.setNickname(null);
      message.lineReplyNoMention({embed : {
        description : `${success}${member} nickname has been reseted successfully`,
        color : success_color
      }})
    } catch (err) {
      
      message.lineReplyNoMention({embed : {
        description : `${error}I don't have permission to reset ${member.toString()} nickname`,
        color : error_color
      }});
    }
}
if(lang === 'it') {
      const member = message.mentions.members.first();
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error} Non hai i permessi!`,
      color : error_color,
  
     
      
           }});

        if(!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error}Non ho i permessi!`,
      color : error_color,
     
      
           }});       



    if (!member) return message.lineReplyNoMention({embed :{
      description : `${error} Perfavore specifica un membro valido!`,
      color : error_color
    }});

    try {
      member.setNickname(null);
      message.lineReplyNoMention({embed : {
        description : `${success}${member} Nickname ripristinato correttamente`,
        color : success_color
      }})
    } catch (err) {
      
      message.lineReplyNoMention({embed : {
        description : `${error} Non ho i permessi per ripristinare il nickname di ${member.toString()}`,
        color : error_color
      }});
    }
}
if(lang === 'de') {
      const member = message.mentions.members.first();
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error} Du hast dafür keine Rechte!`,
      color : error_color,
  
     
      
           }});

        if(!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error} Ich habe keine Genehmigungen!`,
      color : error_color,
     
      
           }});       



    if (!member) return message.lineReplyNoMention({embed :{
      description : `${error} Bitte geben Sie ein gültiges Mitglied an!`,
      color : error_color
    }});

    try {
      member.setNickname(null);
      message.lineReplyNoMention({embed : {
        description : `${success}${member} Nickname erfolgreich zurückgesetzt`,
        color : success_color
      }})
    } catch (err) {
      
      message.lineReplyNoMention({embed : {
        description : `${error} Ich habe nicht die benötigten Rechte um  ${member.toString()}s Nickname zurückzusetzen!`,
        color : error_color
      }});
    }
}
  },
};