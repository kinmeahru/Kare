const { MessageEmbed } = require("discord.js");
const { error_color, success_color, warning_color, warning, success, error, music, music_color } = require('../../config.json')
const db = require('quick.db');
module.exports = {
    name: 'queue', 
    aliases: ['q'], 
    category: '🎶Music',
    description: 'Gives you info about the server queue', 
    run: async (client, message, args) => {
			var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
			
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} You need to be in a vc to execute this command!`)
            if (!voice_channel) return message.channel.send(embed);
            let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} You cannot see the queue if there aren't any songs`)
   message.channel.send(noqueue)
            }
            if(queue)
            message.channel.send('Queue:\n'+(queue.songs.map((song, i) => {
                return `${i === 0 ? 'Now Playing' : `#${i+1}`} - ${song.name} | ${song.author}`
            }).join('\n')));
}
if(lang === 'it') {
	    const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            if (!voice_channel) return message.channel.send(embed);
            let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Non puoi vedere la coda se non ci sono canzoni in essa!`)
   message.channel.send(noqueue)
            }
            if(queue)
            message.channel.send('Queue:\n'+(queue.songs.map((song, i) => {
                return `${i === 0 ? 'In riproduzione' : `#${i+1}`} - ${song.name} | ${song.author}`
								
            }).join('\n')));
	
}
    }
}