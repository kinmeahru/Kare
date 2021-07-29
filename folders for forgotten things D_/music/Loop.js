const { MessageEmbed } = require("discord.js");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db')
//
module.exports = {
    name: 'loop', 
    aliases: [], 
    category: '🎶Music',
    description: 'Loop the queue', 
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
            // Enable repeat mode
            let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} I cannot set a loop if there aren't any songs`)
   message.channel.send(noqueue)
            }
            let status = client.player.setQueueRepeatMode(message, true);
            const loop = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} The song is now set in a loop!`)
            if(status === null)
            return;
            message.channel.send(loop);
}
if(lang === 'it') {

	 const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            if (!voice_channel) return message.channel.send(embed);
            // Enable repeat mode
            let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Non posso mettere un loop se non ci sono canzoni in riproduzione!`)
   message.channel.send(noqueue)
            }
            let status = client.player.setQueueRepeatMode(message, true);
            const loop = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} La canzone è adesso in loop!`)
            if(status === null)
            return;
            message.channel.send(loop);

}
    }
}