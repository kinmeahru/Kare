const { MessageEmbed } = require("discord.js");//
const { error_color, success_color, warning_color, warning, success, error, music, music_color } = require('../../config.json')
const db = require('quick.db')
module.exports = {
    name: 'stop', // Optional
    aliases: ['pause'], // Optional
    category: '🎶Music',
    description: 'Pause the queue', 
    run: async (client, message, args) => {
			var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
	let queue = client.player.getQueue(message);
          
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} I cannot stop a song if there aren't any playing songs`)
  
            
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} You need to be in a vc to execute this command!`)
            if (!voice_channel) { return message.channel.send(embed); 
						} else if(!queue) return message.channel.send(noqueue)
            let song = client.player.pause(message);
            const pause = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Now Stopped \`${song.name}\`!`)
            if(song) 
            
            message.channel.send(pause);
    }
		if(lang === 'it') {
			let queue = client.player.getQueue(message);
			 const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Non posso fermare una canzone se non ce ne sono in riproduzione!`)
			    const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            if (!voice_channel) { return message.channel.send(embed);
						 } else if(!queue) return message.channel.send(noqueue)
            let song = client.player.pause(message);
            const pause = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Fermata \`${song.name}\`!`)
            if(song) 
            
            message.channel.send(pause);


		}
		}
}