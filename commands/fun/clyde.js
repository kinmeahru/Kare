const Discord = require('discord.js');
const fetch = require('node-fetch');
const db = require('quick.db')
const { error, error_color } = require('../../config.json')
 
module.exports = {
   
        name: "clyde",
    
    run: async (bot, message, args) => {
      var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {

        let text = args.join(" ");

        if (!text) {
            return message.channel.send({embed : {
              description: `${error} Please enter a text!`,
              color : error_color
            }});
        }

        let m = await message.channel.send("**Please Wait...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
    
    if(lang === 'it') {
              let text = args.join(" ");

        if (!text) {
            return message.channel.send({embed : {
              description: `${error} Inserisci un testo!`,
              color : error_color
            }});
        }

        let m = await message.channel.send("**Perfavore aspetta...**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "clyde.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch (e) {
            m.edit(e.message);
        }
    }
    }

}