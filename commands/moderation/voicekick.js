const { main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db')

module.exports = {
  name: "voicekick",
  category: "🛠moderation",
  aliases: ["-vc"],
  userPerms: "MOVE_MEMBERS",

  run: async (client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    if (!message.guild.me.hasPermission(["MOVE_MEMBERS"]))
      return message.channel.send({embed : {
				description : `${error} I don't have enough permission!`,
				color : error_color
			}});

      if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send({embed : {
				description : `${error} You don't have permission!`,
				color : error_color
			}});

    if (!message.mentions.members.first())
      return message.channel.send({embed : {
				description : `${error} Please mention an user!`,
				color : error_color
			}});

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send({embed : {
				description : `${error} This user is not in a voice channel!`,
				color : error_color
			}});

      
      

      

    message.mentions.members.first().voice.kick();
    
    message.channel.send({embed : {
			description : `${success} The user has been kicked from the voice channel!`,
			color : success_color
		}})

	}
	if(lang === 'it') {

		    if (!message.guild.me.hasPermission(["MOVE_MEMBERS"]))
      return message.channel.send({embed : {
				description : `${error} Non ho abbastanza permessi!`,
				color : error_color
			}});

      if (!message.member.hasPermission("MOVE_MEMBERS"))
      return message.channel.send({embed : {
				description : `${error} Non hai i permessi per farlo!`,
				color : error_color
			}});

    if (!message.mentions.members.first())
      return message.channel.send({embed : {
				description : `${error} Perfavore menziona un utente!`,
				color : error_color
			}});

    let { channel } = message.mentions.members.first().voice;

    if (!channel)
      return message.channel.send({embed : {
				description : `${error} Questo utente non è in un canale vocale!`,
				color : error_color
			}});

      
      

      

    message.mentions.members.first().voice.kick();
    
    message.channel.send({embed : {
			description : `${success} L'utente è stato kickato dal canale vocale!`,
			color : success_color
		}})


	}
  }
};//