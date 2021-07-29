const { MessageEmbed } = require("discord.js");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db')
module.exports = {
    name: 'leave', 
   
    category: '🎶Music',
    description: 'Leaves the voice channel!', 
        
        run: async (client, message, args) => {
					var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
            


            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} You need to be in a vc to execute this command!`)
            if(!voiceChannel) return message.channel.send(embed)
            
              let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} I cannot leave if there aren't playing songs`)
   message.channel.send(noqueue)
            }
    
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Music stopped & the queue was cleared!`)
             if(isDone)
            message.channel.send(stop);
            
          
            
            voiceChannel.leave()
           
}
if(lang === 'it') {

	

            const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            if(!voiceChannel) return message.channel.send(embed)
            
              let queue = client.player.getQueue(message);
            if(!queue) {
            const noqueue = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Non posso uscire se non ci sono canzoni in riproduzione!`)
   message.channel.send(noqueue)
            }
    
            let isDone = client.player.stop(message);
            const stop = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Canzone fermata e ripulita la coda!`)
             if(isDone)
            message.channel.send(stop);
            
          
            
            voiceChannel.leave()

}
          }
}