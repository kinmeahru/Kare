const { MessageEmbed } = require('discord.js')
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db');
//
module.exports = {
    name: 'nowplaying', 
    aliases: ['np'], 
    category: '🎶Music',
    description: 'Gives info about the song that its being played and the progress of it', 
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
            
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} I cannot execute this command if there aren't playing songs!`)

            
            if (!voice_channel) { return message.channel.send(embed);
						} else if(!queue) return message.channel.send(noqueue)
						
            let progressBar = client.player.createProgressBar(message, {
                size: 20,
                block: '▬',
                arrow: '🔘'
            

            
            });
            
            let song = await client.player.nowPlaying(message)
            const bar = new MessageEmbed()
            .setColor('#85b0d2')
            .setTitle(`${song.name}`)
            .setURL(song.url)
            .setDescription(`⋆ Requested by ${message.author}
            \`${progressBar}\``)

            if(progressBar)

            

                
                message.channel.send(bar);
}
if(lang === 'it') {

	    const voice_channel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            let queue = client.player.getQueue(message);
            
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Non posso eseguire questo comando se non ci sono canzoni in riproduzione!`)

            
            if (!voice_channel) { return message.channel.send(embed); 
						} else if(!queue) return message.channel.send(noqueue)
            let progressBar = client.player.createProgressBar(message, {
                size: 20,
                block: '▬',
                arrow: '🔘'
            

            
            });
            
            let song = await client.player.nowPlaying(message)
            const bar = new MessageEmbed()
            .setColor('#85b0d2')
            .setTitle(`${song.name}`)
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
            .setDescription(`⋆ Richiesto da ${message.author}
            \`${progressBar}\``)

            if(progressBar)

            

                
                message.channel.send(bar);

}
    }
}
