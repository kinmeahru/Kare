const { main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db');
module.exports = {
  name: "slowmode",
  category: "🛠moderation",
  description: "Lets you set slowmode on the channel.",
  aliases: ["sm"],
  args: true,
  usage: "<time>",
  run: (client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    const amount = parseInt(args[0]);

    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply({embd : {
			description : `${error} I don't have permission for do that!`,
			color : error_color
		}});
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send({embed : {
			description : `${error} Ups! You don't have the right permission!`,
			color : error_color
		}});
    if (message.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return message.channel.send({embed : {
					description : `${error} Please enter a valid number!`,
					color : error_color
				}});
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
				 if(amount > 21600) return message.channel.send({embed : {
		 description : `${error} The maximum is of 21.600 seconds!`,
		 color : error_color
	 }})

      else if (amount > 1) {
        message.channel.send({embed : {
					description : `${success}slowmode is now set to ${amount} seconds`,
					color : success_color
				}});
        return;
      } else {
        message.channel.send({embed : {
					description : `${success}slowmode is now set to ${amount} second`,
					color : success_color
				}});
        return;
      }//
    }
    if (args[0] === amount + "m") {
      message.channel.setRateLimitPerUser(amount * 60);
				 if(amount > 360) return message.channel.send({embed : {
		 description : `${error} The maximum is of 360 minutes!`,
		 color : error_color
	 }})

      else if (amount > 1) {
        message.channel.send({embed : {
					description : `${success}slowmode is now set to ${amount} minutes`,
					color : success_color
				}});
        return;
      } else {
        message.channel.send({embed : {
					description : `${success}slowmode is now set to ${amount} minute`,
					color : success_color
				}});

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
	 if(amount > 6) return message.channel.send({embed : {
		 description : `${error} The maximum is of 6 hours!`,
		 color : error_color
	 }})

      else if (amount > 1) {
		
        message.channel.send({embed : {
					description : `${success}slowmode is now set to ${amount} hours`,
					color : success_color
				}});
        return;		 
      } else {
        message.channel.send({embed : {
					description : `${success}slowmode is now set to ${amount} hour`,
					color : success_color
				}});
        return;
      }
    } else {
      message.channel.send({embed : {
					description : `${error} You can only set hours(h), minutes(m), and seconds(s)`,
					color : error_color
				}});
    } 
  }
	if(lang === 'it') {
		   const amount = parseInt(args[0]);

    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.reply({embd : {
			description : `${error} Non ho i permessi per farlo!`,
			color : error_color
		}});
    if (!message.member.hasPermission("MANAGE_CHANNELS"))
    return message.channel.send({embed : {
			description : `${errorr} Ups! Non hai i permessi per farlo!`,
			color : error_color
		}});
    if (message.member.hasPermission("MANAGE_CHANNEL"))
      if (isNaN(amount))
        return message.channel.send({embed : {
					description : `${error} Perfavore inserisci un numero valido!`,
					color : error_color
				}});
    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
				 if(amount > 21600) return message.channel.send({embed : {
		 description : `${error} Il massimo di secondi è di 21.600!`,
		 color : error_color
	 }})

      else if (amount > 1) {
        message.channel.send({embed : {
					description : `${success} Lo slowmode è di adesso ${amount} secondi`,
					color : success_color
				}});
        return;
      } else {
        message.channel.send({embed : {
					description : `${success} Lo slowmode è di adesso ${amount} secondo`,
					color : success_color
				}});
        return;
      }//
    }
    if (args[0] === amount + "m") {
      message.channel.setRateLimitPerUser(amount * 60);
				 if(amount > 360) return message.channel.send({embed : {
		 description : `${error} Il massimo di minuti è di 360 minuti!`,
		 color : error_color
	 }})

      else if (amount > 1) {
        message.channel.send({embed : {
					description : `${success} Lo slowmode è di adesso ${amount} minuti`,
					color : success_color
				}});
        return;
      } else {
        message.channel.send({embed : {
					description : `${success} Lo slowmode è di adesso ${amount} minuto`,
					color : success_color
				}});

        return;
      }
    }
    if (args[0] === amount + "h") {
      message.channel.setRateLimitPerUser(amount * 60 * 60);
	 if(amount > 6) return message.channel.send({embed : {
		 description : `${error} Il massimo è di 6 ore!`,
		 color : error_color
	 }})

      else if (amount > 1) {
		
        message.channel.send({embed : {
					description : `${success} Lo slowmode è di adesso ${amount} ora`,
					color : success_color
				}});
        return;		 
      } else {
        message.channel.send({embed : {
					description : `${success} Lo slowmode è di adesso ${amount} ore`,
					color : success_color
				}});
        return;
      }
    } else {
      message.channel.send({embed : {
					description : `${error} Puoi solo impostare ore(h), minuti(m), e secondi(s)`,
					color : error_color
				}});
    } 

	}
	}
};
