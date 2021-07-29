const discord = require("discord.js");
const { main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db')
//
module.exports = {
  name: "ban",
  category: "🛠moderation",
  description: "Ban anyone with one shot whithout knowing anyone xD",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    var lang = await db.get(`language_${message.guild.id}`)
    if(!lang) lang = 'en'


    if(lang==='en'){

  
    
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.lineReplyNoMention({embed : {
      description : `${error}You don't have permission`,
      color : error_color,
      footer : {
        text : `BAN_MEMBERS`
      }
    }})
		    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.lineReplyNoMention({embed : {
      description : `${error}I don't have permissions`,
      color : error_color,
      footer : {
        text : `BAN_MEMBERS`
      }
    }})
    
if(!member) return message.lineReplyNoMention({embed : {
          description : `${error}Please specify a valid member`,
          color : error_color
        }});



        
    
    

    
  


    
    if(member.id === message.author.id) return message.lineReplyNoMention({embed : {
      description : `${error}Umm you can't ban yourself`,
      color : error_color
    }})
    
 
   


    if(member.bannable) {
       let embed = new discord.MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success}Successfully banned :
**Member :** ${member} 
**Member ID :** ${member.id}
**Reason :** ${reason || "None"}

`)
      
      message.lineReplyNoMention(embed)

     
      
      member.ban()
      
      message.delete()

      


       
      
    } else {
      return message.lineReplyNoMention({embed : {
        description : `${error}I was unable to ban this member please make sure my role is above theirs`,
        color : error_color
      }})
    }
    }
// italian 
    if(lang === 'it'){

  
    
            const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])     
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.lineReplyNoMention({embed : {
      description : `${error}Non hai i permessi per farlo`,
      color : error_color,
      footer : {
        text : `BAN_MEMBERS`
      }
    }})
		 if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.lineReplyNoMention({embed : {
      description : `${error}Non ho i permessi per farlo`,
      color : error_color,
      footer : {
        text : `BAN_MEMBERS`
      }
    }})
 if(!member) return message.lineReplyNoMention({embed : {
          description : `${error}Perfavore specifica un utente valido`,
          color : error_color
        }});
    




  
    
   
    
    
  


    
    if(member.id === message.author.id) return message.lineReplyNoMention({embed : {
      description : `${error}Uhm non puoi bannare te stesso`,
      color : error_color
    }})
    
 
   


    if(member.bannable) {
       let embed = new discord.MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success}Bannato con successo :
**Utente :** ${member} 
**ID Utente :** ${member.id}
**Motivo :** ${reason || "Nessuno"}

`)
      
      message.lineReplyNoMention(embed)

     
      
      member.ban()
      
      message.delete()

      


       
      
    } else {
      return message.lineReplyNoMention({embed : {
        description : `${error}Non sono riuscita a bannare questo membro, assicurati che il mio ruolo sia superiore al suo`,
        color : error_color
      }})
    }
    }


  }
};