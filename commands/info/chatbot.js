const msg = require("discord.js");//
const db = require('quick.db')
module.exports = {
  name: "chatbot",
  category: "🎆fun",
  hidden: true,
  usage: "To use this command you have to create a channel called 'chatbot' and after that you can talk to it freely within that channel! ",  
  description: "Chat with bot!",
  run: async (client, message, args) => {
        var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
    message.channel.send({embed : {
    description : `To use this command you have to create a channel called "chatbot" and after that you can talk to it freely within that channel!`,
    color : `ORANGE`  
  }});
    
}
if(lang === 'it') {
    message.channel.send({embed : {
    description : `Per utilizzare questo comando devi creare un canale chiamato "chatbot" e successivamente puoi parlarci liberamente all'interno di quel canale!`,
    color : `ORANGE`  
  }});


}
  }
  }
