const { MessageEmbed } = require("discord.js");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db');
module.exports = {
    name: 'clearqueue',
    aliases: ['removequeue', 'clear-queue'], 
    category: '🎶Music',
    description: 'Clears the queue', 
    run: async (client, message, args) => {
			var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
        const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor(error_color)
        .setDescription(`${error} You need to be in a vc to execute this command!`) 
        let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} I cannot clear queue if the queue is already clear!`)
   
            }
        const embed1 = new MessageEmbed()
        .setColor(success_color)
        .setDescription(`${success} Queue was cleared!`)
         if (!voice_channel) { return message.channel.send(embed);
				} else if(!queue) { 
					return message.channel.send(noqueue)
				}
       
        let isDone = client.player.clearQueue(message);
        if(isDone)
            message.channel.send(embed1);
    }

		if(lang === 'it') {

			  const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
        .setColor(error_color)
        .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`) 
        let queue = client.player.getQueue(message);
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} non posso pulire la coda se essa è già pulita!`)

            
        const embed1 = new MessageEmbed()
        .setColor(success_color)
        .setDescription(`${success} Coda pulita!`)
        if (!voice_channel) { return message.channel.send(embed);
				} else if(!queue) { 
					return message.channel.send(noqueue)
				}
       
        let isDone = client.player.clearQueue(message);
        if(isDone)
            message.channel.send(embed1);

		}
		}
}