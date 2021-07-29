const { MessageEmbed } = require("discord.js");
const { error_color, success_color, warning_color, warning, success, error, music, music_color } = require('../../config.json')
const db = require('quick.db')

module.exports = {
    name: 'shuffle', 
    aliases: ['sh'], 
    category: '🎶Music',
    description: 'Shuffle the queue', 
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
            .setDescription(`${error} I cannot shuffle the queue if there aren't songs in there`)
   message.channel.send(noqueue)
            }
            let songs = client.player.shuffle(message);
            const shuffle = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Server queue was shuffled!`)
            if(songs)
            message.channel.send(shuffle);
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
            .setDescription(`${error} Non posso mescolare la coda se non ci sono canzoni in essa!`)
   message.channel.send(noqueue)
            }
            let songs = client.player.shuffle(message);
            const shuffle = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Mescolata la coda del server!`)
            if(songs)
            message.channel.send(shuffle);
}
    }
}