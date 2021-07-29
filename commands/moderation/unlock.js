const Discord = module.require("discord.js");//
const { main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db')

module.exports = {
   name: "unlock",
   description: "Unlocks a Channel",
    usage: "unlock <channel>",
  args: true,
  category: "🛠moderation",
    permissions: "MANAGE_CHANNELS",
   run: async(client, message, args) => {
		 var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {

      if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply({embed : {
				description : `${error} I don't have enough permissions!`,
				color : error_color
			}});
   if (!message.member.hasPermission("MANAGE_CHANNELS")) {
   return message.channel.send({embed : {
		 description : `${error} You don't have permissions! Let's dance crab rave together!`,
		 color : error_color
	 }});
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
  
   .setDescription(`🔓 ${message.channel} has been unlocked`)
   .setColor(success_color);
   await message.channel.send(embed);
 


	 }
	 if(lang === 'it') {

    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply({embed : {
				description : `${error} Non ho abbasta permessi!`,
				color : error_color
			}});
   if (!message.member.hasPermission("MANAGE_CHANNELS")) {
   return message.channel.send({embed : {
		 description : `${error} Non hai i permessi per farlo! Balliamo crab rave insieme!`,
		 color : error_color
	 }});
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        null : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
  
   .setDescription(`🔓 ${message.channel} è stata sbloccata!`)
   .setColor(success_color);
   await message.channel.send(embed);

	 }

}
}