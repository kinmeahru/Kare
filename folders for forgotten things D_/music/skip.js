const { MessageEmbed } = require("discord.js");
const { error_color, success_color, warning_color, warning, success, error, music, music_color } = require('../../config.json')
const ytsr = require('ytsr');
const db = require('quick.db');
module.exports = {
    name: 'skip', 
    aliases: ['sk'], 
    category: '🎶Music',
    description: 'Skip the song that its playing.', 
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
            .setDescription(`${error} I can't skip to nothing!`)
   message.channel.send(noqueue)
            }

         
		await client.player.skip(message);
const skipemb = new MessageEmbed()
.setColor(success_color)
.setDescription(`${success} Song skipped!`)
            
		message.channel.send(skipemb);
}
if(lang === 'it') {
	    const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Non posso saltare a niente!`)
   message.channel.send(noqueue)
            }

         
		await client.player.skip(message);
const skipemb = new MessageEmbed()
.setColor(success_color)
.setDescription(`${success} Canzone saltata!`)
            
		message.channel.send(skipemb);

}
	},
};