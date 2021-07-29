const { MessageEmbed } = require("discord.js");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db')
module.exports = {
    name: 'join', 
    aliases: [], 
    category: '🎶Music',
    description: 'Join the voice channel!', 
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
            voiceChannel.join()
            message.react('🪐')
              
          }
					if(lang === 'it') {

  const voiceChannel = message.member.voice.channel;
            const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
            if(!voiceChannel) return message.channel.send(embed)
            voiceChannel.join()
            message.react('🪐')

					}
				}
}