const { MessageEmbed } = require("discord.js");
const { error_color, success_color, warning_color, warning, success, error, music, music_color } = require('../../config.json')
const db = require('quick.db');

module.exports = {
    name: 'resume', 
    aliases: ['resume'], 
    category: '🎶Music',
    description: 'Resume the song that was paused', 
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
            .setDescription(`${error} I cannot resume a songs if there aren't playing songs`)
   message.channel.send(noqueue)
            }
            let song = client.player.resume(message);
            const resume = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success}   \`${song.name}\`  was resumed!`)
            if(song)
            message.channel.send(resume);
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
            .setDescription(`${error} Non posso riprendere una canzone fermata se non ce ne sono!`)
   message.channel.send(noqueue)
            }
            let song = client.player.resume(message);
            const resume = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success}   \`${song.name}\` è stata ripresa!`)
            if(song)
            message.channel.send(resume);

}
    }
}