const Discord = require("discord.js");//
const { default_prefix, main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db')
module.exports = {
  name: "clear",
  category: "🛠moderation",
  description: "clear the messegge",
  aliases: ['purge', 'delete', 'prune'],

  async run(client, message, args) {
    var lang = await db.get(`language_${message.guild.id}`)
    if(!lang) lang = 'en'

 if (lang === 'en') {

 
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention({embed : {
     description : `${error}You don't have permission`,
  
   }});
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention({embed : {
    description : `${error}I don't have permission`,
    color : error_color,
   
  }});




let amount = Number(args[0],10) || parseInt(args[0]);
if(isNaN(amount) || !Number.isInteger(amount)) return message.lineReplyNoMention({embed : {
  description : `${error}Please enter the amount of message you want to delete`,
  color : error_color
}});
if(!amount || amount < 1 || amount > 100) return message.lineReplyNoMention({embed : {
  description : `${error}Please enter a number between 1 and 100`,
  color : error_color
}})
if(!args[1]) {
try { 
await message.delete()
await message.channel.bulkDelete(amount).then(async (m) => { 
  
   let embed = new Discord.MessageEmbed()
  .setColor(success_color)
  .setDescription(`${success}Cleared  \`${m.size}\`  messages successfully`);

   message.channel.send(embed).then(msg => msg.delete({timeout:4000})); 
})
   } catch (e) { 
     message.channel.send({embed : {
       description : `${error}You can only delete the messages which are not older than 14 days`,
       color : error_color
            }})
     

   }
}
}
// italian

 if (lang === 'it') {

 
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention({embed : {
     description : `${error}Non hai i permessi per farlo`,
     color : error_color,
     footer : {
 
     }
   }});
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention({embed : {
    description : `${error}Non ho i permessi per farlo`,
    color : error_color,
    footer : {
   
    }
  }});




let amount = Number(args[0],10) || parseInt(args[0]);
if(isNaN(amount) || !Number.isInteger(amount)) return message.lineReplyNoMention({embed : {
  description : `${error}Perfavore inserisci una quantità di messaggi da eliminare`,
  color : error_color
}});
if(!amount || amount < 1 || amount > 100) return message.lineReplyNoMention({embed : {
  description : `${error}Perfavore inserisci una numero da 1 a 100`,
  color : error_color
}})
if(!args[1]) {
try { 
await message.delete()
await message.channel.bulkDelete(amount).then(async (m) => { 
  
   let embed = new Discord.MessageEmbed()
  .setColor(success_color)
  .setDescription(`${success}Eliminati  \`${m.size}\`  messaggi con successo`);

   message.channel.send(embed).then(msg => msg.delete({timeout:4000})); 
})
   } catch (e) { 
     message.channel.send({embed : {
       description : `${error}Puoi eliminare solo i messaggi che non sono di oltre 14 giorni fa`,
       color : error_color
            }})
     

   }
}
}
 if (lang === 'de') {

 
   if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention({embed : {
     description : `${error}Du hast dafür keine Rechte!`,
     color : error_color,
     footer : {
 
     }
   }});
  if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention({embed : {
    description : `${error}Ich habe keine Erlaubnis dazu`,
    color : error_color,
    footer : {
   
    }
  }});




let amount = Number(args[0],10) || parseInt(args[0]);
if(isNaN(amount) || !Number.isInteger(amount)) return message.lineReplyNoMention({embed : {
  description : `${error}Bitte geben Sie die Anzahl der zu löschenden Nachrichten ein`,
  color : error_color
}});
if(!amount || amount < 1 || amount > 100) return message.lineReplyNoMention({embed : {
  description : `${error}Bitte geben Sie eine Zahl von 1 bis 100 ein`,
  color : error_color
}})
if(!args[1]) {
try { 
await message.delete()
await message.channel.bulkDelete(amount).then(async (m) => { 
  
   let embed = new Discord.MessageEmbed()
  .setColor(success_color)
  .setDescription(`${success} \`${m.size}\` Nachrichten erfolgreich gelöscht`);

   message.channel.send(embed).then(msg => msg.delete({timeout:4000})); 
})
   } catch (e) { 
     message.channel.send({embed : {
       description : `${error}Sie können nur Nachrichten löschen, die nicht älter als 14 Tage sind`,
       color : error_color
            }})
     

   }
}
}

}
}


