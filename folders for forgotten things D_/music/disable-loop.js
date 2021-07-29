const { MessageEmbed } = require("discord.js");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db')

module.exports = {
    name: 'disable-loop', 
    aliases: ["stoploop"],
    category: '🎶Music',
    description: 'Stop looping the queue', 
    run: async (client, message, args) => {
			var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
	let queue = client.player.getQueue(message);
            const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} You need to be in a vc to execute this command!`)
            if (!voice_channel) { return message.channel.send(embed);
						} else if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error}I cannot clear queue if there aren't songs in the queue`)
   message.channel.send(noqueue)
            }
           
            let status = client.player.setQueueRepeatMode(message, false);

            const disloop = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Queue will not be longer repeated indefinitely!`)
            if(status === null)
            return;
            message.channel.send(disloop);
    
		
		}

		if(lang === 'it') {

		}
}
}