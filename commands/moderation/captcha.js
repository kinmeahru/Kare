const db = require('quick.db')
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
    name : 'captcha',
    run : async(client, message, args) => {
       var lang = await db.get(`language_${message.guild.id}`)
    if(!lang) lang = 'en'


    if(lang==='en') { 
   if(!message.member.hasPermission("MANAGE_GUILD")) return message.lineReplyNoMention({embed : {
      description : `${error}You don't have permission`,
      color : error_color,
    }})

if(!args[0]) return message.channel.send({embed : {
  description : `${error} Please set on / off`,
  color : error_color
}})
    
        if(args[0] === 'on') {
            await db.set(`captcha-${message.guild.id}`, true)
            message.channel.send({embed : {
							description : `${success} Turned on the captcha system!`,
							color : main_color
						}})
        } else if(args[0] === 'off') {
            await db.delete(`captcha-${message.guild.id}`)
            message.channel.send({embed : {
							description : `${success} Turned off the captcha system!`,
							color : main_color
						}})
        }
    }
    if(lang === 'it') {
         if(!message.member.hasPermission("MANAGE_GUILD")) return message.lineReplyNoMention({embed : {
      description : `${error} Non hai i permessi per farlo!`,
      color : error_color
    }})

if(!args[0]) return message.channel.send({embed : {
  description : `${error} Perfavore imposta on / off`,
  color : error_color
}})
    
        if(args[0] === 'on') {
            await db.set(`captcha-${message.guild.id}`, true)
            message.channel.send({embed : {
							description : `${success} Impostato il sistema captcha!`,
							color : main_color
						}})
        } else if(args[0] === 'off') {
            await db.delete(`captcha-${message.guild.id}`)
            message.channel.send({embed : {
							description : `${success} Disattivato il sistema captcha!`,
							color : main_color
						}})
        }
    }
    if(lang === 'de') {
         if(!message.member.hasPermission("MANAGE_GUILD")) return message.lineReplyNoMention({embed : {
      description : `${error} Du hast dafür keine Rechte!`,
      color : error_color
    }})

if(!args[0]) return message.channel.send({embed : {
  description : `${error} Bitte on / off`,
  color : error_color
}})
    
        if(args[0] === 'on') {
            await db.set(`captcha-${message.guild.id}`, true)
            message.channel.send({embed : {
							description : `${success} Captcha-System eingeschaltet`,
							color : main_color
						}})
        } else if(args[0] === 'off') {
            await db.delete(`captcha-${message.guild.id}`)
            message.channel.send({embed : {
							description : `${success} Captcha-System ausgeschaltet`,
							color : main_color
						}})
        }
    }
}
}