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

    const member = message.mentions.members.first();
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error}You don't have permission`,
      color : error_color,
      footer : {
        text : `CHANGE_NICKNAME`
      }
      
           }});

        if(!message.guild.me.hasPermission("CHANGE_NICKNAME")) return message.lineReplyNoMention({embed : {
      description : `${error}I don't have permission`,
      color : error_color,
      footer : {
        text : `CHANGE_NICKNAME`
      }
      
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
  },
};