const discord = require("discord.js");
const figlet = require("figlet"); 
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
    name: "ascii",
    aliases: [],
    category: "🎆fun",
    usage: "ascii <text>",
    description: "Returns provided text in ascii format.",
    run: async (client, message, args) => {
       var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

   let text = args.join(" ");
   if(!text) {
return message.channel.send({embed : {
    description : `${error} Please provide a text to convert in ascii!`,
    color : error_color
  }})
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send({embed : {
    description : `${error} Please enter a text of max 20 characters!`,
    color : error_color
  }})
}
 // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!  
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})
}
if(lang === 'it') {


   let text = args.join(" ");
   if(!text) {
return message.channel.send({embed : {
    description : `${error} Perfavore provvedi un testo da convertire in ascii!`,
    color : error_color
  }})
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send({embed : {
    description : `${error} Perfavore inserisci un testo di massimo 20 caratteri!`,
    color : error_color
  }})
}
 // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!  
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

}
if(lang === 'de') {


   let text = args.join(" ");
   if(!text) {
return message.channel.send({embed : {
    description : `${error} Bitte geben Sie einen Text zum Konvertieren in ASCII ein!`,
    color : error_color
  }})
}
   let maxlen = 20
if(text.length > 20) {
return message.channel.send({embed : {
    description : `${error} Bitte geben Sie einen Text mit bis zu 20 Zeichen ein!`,
    color : error_color
  }})
}
 // AGAIN, MAKE SURE TO INSTALL FIGLET PACKAGE!  
figlet(text, function(err, data) {
message.channel.send(data, {
code: 'AsciiArt' 
});
})

}
    }
};