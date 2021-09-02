const { Client, Message, MessageEmbed } = require("discord.js");//
const { main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db')

module.exports = {
name: "unban",
category: ["🛠moderation"],
/**
 * @param {Client} client
 * @param {Message} message  
 * @param {String[]} args
 */

run: async (client, message, args) => {
	var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
  if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply({embed : {
		description : `${error} I do not have permissions!`,
    color : error_color
	}});
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({embed : {
		description : `${error} You don't have permissions!`,
		color : error_color
	}})

  const id = args[0];
  if (!id) return message.reply({embed : {
		description : `${error} Please enter an ID!`,
		color : error_color
	}});

  const bannedMembers = await message.guild.fetchBans();
  if (!bannedMembers.find((user) => user.user.id === id))
   return message.reply({embed : {
		 description : `${error} This user is not banned!`,
		 color : error_color
	 }});

  
   
       message.guild.members.unban(id);

      message.channel.send({embed : {
				description : `${success} ${id} Is now unbanned!`,
				color : success_color
			}});


}

if(lang === 'it') {

	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply({embed : {
		description : `${error} Non ho i permessi per farlo!`,
    color : error_color
	}});
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({embed : {
		description : `${error} Non hai i permessi per farlo!`,
		color : error_color
	}})

  const id = args[0];
  if (!id) return message.reply({embed : {
		description : `${error} Perfavore inserisci un ID!`,
		color : error_color
	}});

  const bannedMembers = await message.guild.fetchBans();
  if (!bannedMembers.find((user) => user.user.id === id))
   return message.reply({embed : {
		 description : `${error} Questo utente non è bannato!`,
		 color : error_color
	 }});

  
   
       message.guild.members.unban(id);

      message.channel.send({embed : {
				description : `${success} ${id} È adesso sbannato!`,
				color : success_color
			}});

}
if(lang === 'de') {

	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply({embed : {
			description : `${error} Ich habe nicht genügend Berechtigungen`,
    color : error_color
	}});
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({embed : {
		description : `${error} Du hast dafür keine Rechte!`,
		color : error_color
	}})

  const id = args[0];
  if (!id) return message.reply({embed : {
		description : `${error} Bitte geben Sie eine ID ein!`,
		color : error_color
	}});

  const bannedMembers = await message.guild.fetchBans();
  if (!bannedMembers.find((user) => user.user.id === id))
   return message.reply({embed : {
		 description : `${error} Dieser Benutzer ist nicht gesperrt!`,
		 color : error_color
	 }});

  
   
       message.guild.members.unban(id);

      message.channel.send({embed : {
				description : `${success} ${id} Es ist jetzt entbannt!`,
				color : success_color
			}});

}
},


};