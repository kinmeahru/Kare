const { MessageEmbed } = require("discord.js");
const { error_color, success_color, warning_color, warning, success, error, music, music_color, volumee } = require('../../config.json')
const db = require('quick.db')
module.exports = {
    name: 'volume', 
    category: '🎶Music',
    description: 'Set the volume of the bot in the vc', 
    aliases: ['setvolume'], // Optional
    run: async (client, message, args) => {
			var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
const lettere = ('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');
	if(message.content.includes(lettere)) return message.channel.send({embed : {
		description : `${error} You can only set number!`,
		color : error_color
	}})
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} I cannot execute the volume command if there aren't playing songs`)
   message.channel.send(noqueue)
            } else {
            if(!args[0]) return message.channel.send({embed : {
    description : `${error} Please set a valid volume!`,
    color : error_color 
  }})
            }
            let isDone = client.player.setVolume(message, parseInt(args[0]));
            const volume = new MessageEmbed()
            .setColor('#8A8AFF')
            .setDescription(`${volumee} Volume set to ${args[0]}%!`)
            if(isDone)
            message.channel.send(volume);
}
if(lang === 'it') {
	  const voice_channel = message.member.voice.channel;
			const lettere = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
	if(message.content.includes(lettere)) return message.channel.send({embed : {
		description : `${error} Puoi solo impostare numeri!`,
		color : error_color
	}})
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Non posso cambiare il volume di una canzone se non ce ne sono in riproduzione!`)
   message.channel.send(noqueue)
            } else {
            if(!args[0]) return message.channel.send({embed : {
    description : `${error} Perfavore imposta un volume valido!`,
    color : error_color 
  }})
            }
            let isDone = client.player.setVolume(message, parseInt(args[0]));
            const volume = new MessageEmbed()
            .setColor('#8A8AFF')
            .setDescription(`${volumee} Volume impostato a ${args[0]}%!`)
            if(isDone)
            message.channel.send(volume);

}
    }
}