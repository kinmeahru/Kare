const db = require("quick.db");//
const { MessageEmbed } = require("discord.js");
const Discord = module.require("discord.js");
const { main_color, success_color, error_color, success, error } = require('../../config.json');


module.exports = {
  name: "unmute",
  category: "🛠moderation",
  run: async (client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {

    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply({embed : {
			description : `${error} I don't have enough permission!`,
			color : error_color
		}});
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send({embed : {
				description : `${error} You don't have permission!`,
				color : error_color
			}});
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send({embed : {
			description : `${error} I don't have enough permission!`,
			color : error_color
		}});
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send({embed : {
				description : `${error} Please mention a user!`,
				color : error_color
			}});
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send({embed : {
				description : `${error} This user do not have muted role!`,
				color : error_color
			}});
    }

  user.roles.remove(muterole);
   

   const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
            
            .setColor(success_color)
            .setDescription(`${success} ${user} Is now unmuted!`)
      message.channel.send(embed);

    
    message.delete()
  
  user.send({embed : {
description : `${success} You has been unmuted on ${message.guild.name} `,
color : success_color
	}});

  }
	if(lang === 'it') {

		
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.reply({embed : {
			description : `${error} Non ho abbastanza permessi!`,
			color : error_color
		}});
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send({embed : {
				description : `${error} Non hai i permessi per farlo!`,
				color : error_color
			}});
    }

    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send({embed : {
			description : `${error} Non ho i permessi per farlo!`,
			color : error_color
		}});
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send({embed : {
				description : `${error} Perfavore menziona un utente!`,
				color : error_color
			}});
    }

    let muterole = message.guild.roles.cache.find(x => x.name === "muted");

    if (user.roles.cache.has(muterole)) {
      return message.channel.send({embed : {
				description : `${error} Questo utente non è mutato!`,
				color : error_color
			}});
    }

  user.roles.remove(muterole);
   

   const embed = new Discord.MessageEmbed()
      .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
            
            .setColor(success_color)
            .setDescription(`${success} ${user} È adesso smutato!`)
      message.channel.send(embed);

    
    message.delete()
  
  user.send({embed : {
description : `${success} Sei stato smutato in ${message.guild.name} `,
color : success_color
	}});



	}

	}
};
