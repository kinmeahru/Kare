const { Client, Message, MessageEmbed } = require("discord.js");
const { main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db');

module.exports = {
  name: "setnick",
  category: "🛠moderation",
  aliases: ["sn"],
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
    const member = message.mentions.members.first(); 
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply({embed : {
			description : `${error} You don't have permission for do that!`,
			color : error_color
		}});
    if (!member) return message.reply({embed : {
			description : `${error} Please specify a member!`,
			color : error_color
		}});

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply({embed : {
			description : `${error} Please enter a nickname!`,
			color : error_color
		}});

    try {
      member.setNickname(arguments);
      message.channel.send({embed : {
				description : `${success}${member}'s nickname changed!`,
				color : success_color
			}})
    } catch (err) {
      message.reply(
        "I do not have permission to set " + member.toString() + " nickname!"
      );
    }
}
if(lang === 'it') {

	const member = message.mentions.members.first(); 
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply({embed : {
			description : `${error} Non hai i permessi per farlo!`,
			color : error_color
		}});
    if (!member) return message.reply({embed : {
			description : `${error} Perfavore specifica un utente!`,
			color : error_color
		}});

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply({embed : {
			description : `${error} Perfavore inserisci un nickname!`,
			color : error_color
		}});

    try {
      member.setNickname(arguments);
      message.channel.send({embed : {
				description : `${success} Aggiornato il nickname di ${member}!`,
				color : success_color
			}})
    } catch (err) {
      message.reply(
        "Non ho i permessi per farlo" + member.toString() + " nickname!"
      );
    }

}
if(lang === 'de') {

	const member = message.mentions.members.first(); 
    if(!message.member.hasPermission("CHANGE_NICKNAME")) return message.reply({embed : {
			description : `${error} Du hast dafür keine Rechte!`,
			color : error_color
		}});
    if (!member) return message.reply({embed : {
			description : `${error} Bitte geben Sie einen Benutzer an!`,
			color : error_color
		}});

    const arguments = args.slice(1).join(" ");

    if (!arguments) return message.reply({embed : {
			description : `${error} Bitte geben Sie einen Spitznamen ein!`,
			color : error_color
		}});

    try {
      member.setNickname(arguments);
      message.channel.send({embed : {
				description : `${success}  ${member}s Nickname geändert!!`,
				color : success_color
			}})
    } catch (err) {
      message.reply(
        `Ich habe nicht die benötigten Rechte um ${member}s Nickname zurückzusetzen!`
      );
    }

}
  },
};
