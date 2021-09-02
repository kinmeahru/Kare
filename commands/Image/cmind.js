

const Discord = require("discord.js");
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const Color = main_color, Random = require("srod-v2");//
module.exports = {
  name: "changemymind",
  aliases: ["cmm"],
  category: "🖼Image",
  description: "Return A Change My Mind Image!",
  usage: "Changemymind <Text>",
  run: async (client, message, args) => {
           var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
    
    const Value = args.join(" ");
    if (!Value || Value.length > 25) return message.channel.send({embed : {
    description : `${error} Please enter a text with max 25 characters`,
    color : error_color
  }}); 

    const Data = await Random.ChangeMyMind({ Message: Value, Color: Color });

    return message.channel.send(Data);
}
 
 if(lang === 'it') {

       const Value = args.join(" ");
    if (!Value || Value.length > 25) return message.channel.send({embed : {
    description : `${error} Perfavore scrivi un testo di massimo 25 caratteri!`,
    color : error_color
  }}); 

    const Data = await Random.ChangeMyMind({ Message: Value, Color: Color });

    return message.channel.send(Data);

 }
 if(lang === 'de') {

       const Value = args.join(" ");
    if (!Value || Value.length > 25) return message.channel.send({embed : {
    description : `${error} Bitte schreiben Sie einen Text mit bis zu 25 Zeichen!`,
    color : error_color
  }}); 

    const Data = await Random.ChangeMyMind({ Message: Value, Color: Color });

    return message.channel.send(Data);

 }
  }
};
