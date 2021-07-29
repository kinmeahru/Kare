
const Color = "RANDOM";//
const Discord = require("discord.js");
const db = require('quick.db');

const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
  name: "meeting",
  aliases: ["amongusmeeting", "mtg"],
  category: "🖼Image",
  description: "Return A Among Us Meeting Image!",
  usage: "Meeting <Text>",
  run: async (client, message, args) => {
      var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send({embed : {
    description : `${error} Please enter a text with max 150 characters!`,
    color : error_color
  }}); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Emergency Meeting (" + message.author.username + ")")
    .setImage(encodeURI(`https://vacefron.nl/api/emergencymeeting?text=${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);
}

if(lang === 'it') {
     const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send({embed : {
    description : `${error} Perfavore inserisci un testo di massimo 150 caratteri!`,
    color : error_color
	  }}); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Emergency Meeting (" + message.author.username + ")")
    .setImage(encodeURI(`https://vacefron.nl/api/emergencymeeting?text=${Value}`))
    .setTimestamp();

    return message.channel.send(Embed);

}
  }
};
