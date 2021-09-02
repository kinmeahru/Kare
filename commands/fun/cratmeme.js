const Discord = module.require("discord.js");
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');


module.exports = {
    name: "creatememe",
    category: "🎆fun",
    aliases: ["cm"], 
    description: "Create Custom Memes",
    run: async(client, message, args) => {
        var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        message.delete();
        const memetemplate = args[0];
        if (!memetemplate) {
            return message.channel.send({embed : {
    description : `${error} Mention a template! For see the template enter \`--memetemp\``,
    color : error_color
  }});
        }
        const memetext1 = args[1];
        if (!memetext1) {
            return message.channel.send({embed : {
    description : `${error} Enter the text to be placed at the top!`,
    color : error_color
  }});
        }
        const memetext2 = args[2];
        if (!memetext2) {
            return message.channel.send({embed : {
    description : `${error} Enter the text to be placed at the bottom!`,
    color : error_color
  }});
        }
        message.channel.send({ files: [{ attachment: `https://api.memegen.link/images/${memetemplate}/${memetext1}/${memetext2}`, name: "custommeme.png"}]})
    }
       
    if(lang === 'it') {
         message.delete();
        const memetemplate = args[0];
        if (!memetemplate) {
            return message.channel.send({embed : {
    description : `${error} Menziona un template! per vedere i template digita \`--memetemp\``,
    color : error_color
  }});
        }
        const memetext1 = args[1];
        if (!memetext1) {
            return message.channel.send({embed : {
    description : `${error} Inserisci il testo che andrà in alto!`,
    color : error_color  
  }});
        }
        const memetext2 = args[2];
        if (!memetext2) {
            return message.channel.send({embed : {
    description : `${error} Inserisci il testo che andrà in basso!`,
    color : error_color
  }});
        }
        message.channel.send({ files: [{ attachment: `https://api.memegen.link/images/${memetemplate}/${memetext1}/${memetext2}`, name: "custommeme.png"}]})
    }
       if(lang === 'de') {
         message.delete();
        const memetemplate = args[0];
        if (!memetemplate) {
            return message.channel.send({embed : {
    description : `${error} Erwähnen Sie ein Modell! um den Vorlagentyp zu sehen \`--memetemp\``,
    color : error_color
  }});
        }
        const memetext1 = args[1];
        if (!memetext1) {
            return message.channel.send({embed : {
    description : `${error} Geben Sie den Text ein, der nach oben geht!`,
    color : error_color  
  }});
        }
        const memetext2 = args[2];
        if (!memetext2) {
            return message.channel.send({embed : {
    description : `${error} Geben Sie den Text ein, der unten angezeigt wird!`,
    color : error_color
  }});
        }
        message.channel.send({ files: [{ attachment: `https://api.memegen.link/images/${memetemplate}/${memetext1}/${memetext2}`, name: "custommeme.png"}]})
    }
}
}