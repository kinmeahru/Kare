const { MessageEmbed } = require("discord.js");//
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db')

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  aliases: ["ach"],
  category: "🖼Image",
  run: async (client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    const text = args.join("+");
		if(!args.join(" ")) return message.channel.send({embed : {
			description : `${error}Please enter a text!`,
			color : error_color
		}})
    const e = new MessageEmbed()
      .setTitle("Minecraft achievement")
      .setImage(
        `https://minecraftskinstealer.com/achievement/5/Achievement+Unlocked%21/${text}`
      );
      message.delete();
    message.channel.send(e);
}
if(lang === 'it') {
	   const text = args.join("+");
		if(!args.join(" ")) return message.channel.send({embed : {
			description : `${error}Perfavore inserisci un testo!`,
			color : error_color
		}})
    const e = new MessageEmbed()
      .setTitle("Minecraft achievement")
      .setImage(
        `https://minecraftskinstealer.com/achievement/5/Achievement+Unlocked%21/${text}`
      );
      message.delete();
    message.channel.send(e);
	
}
if(lang === 'de') {
	   const text = args.join("+");
		if(!args.join(" ")) return message.channel.send({embed : {
			description : `${error}Bitte geben Sie einen Text ein!`,
			color : error_color
		}})
    const e = new MessageEmbed()
      .setTitle("Minecraft achievement")
      .setImage(
        `https://minecraftskinstealer.com/achievement/5/Achievement+Unlocked%21/${text}`
      );
      message.delete();
    message.channel.send(e);
	
}
  },
};