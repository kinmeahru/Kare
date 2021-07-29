const { MessageEmbed } = require("discord.js");
const ytsr = require('ytsr');
const { error_color, success_color, warning_color, warning, success, error, music, music_color } = require('../../config.json')
const db = require('quick.db')
module.exports = {
    name: 'play',
    aliases: ['p'], // Optional
    category: '🎶Music',
    description: 'Play a song in the vc', 
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
 
        const noquery = new MessageEmbed()
        .setColor(error_color)
        .setDescription(`${error} You need to specify a song name/link`)

               if (!args.join()) return message.channel.send(noquery);
        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
                  .setColor("8a8aff")
                  .setTitle("**Added to the queue**")
            .setDescription(`\n${song.name}\n\nRequested by: ${message.author.username}`)
            .setThumbnail(song.thumbnail)

           
            
            if(song)
                message.channel.send(added);
            return;
        } else {
         
            let song = await client.player.play(message, args.join(' '));

            const started = new MessageEmbed()
            .setColor('#8A8AFF')
         .setTitle(`**Now Playing**`)
            .setDescription(`\n${song.name}\n${song.url}\n\n`)
            .setFooter(`Requested by: ${message.author.username}`)

        .setImage(song.thumbnail)
      

            
            if(song)
                message.channel.send(started);
            return;
        }
    }
		if(lang === 'it') {

			      const voice_channel = message.member.voice.channel;
        const embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Devi essere in un canale vocale per eseguire questo comando!`)
        if (!voice_channel) return message.channel.send(embed);
 
        const noquery = new MessageEmbed()
        .setColor(error_color)
        .setDescription(`${error} Devi specificare un nome di una canzone/link!`)

               if (!args.join()) return message.channel.send(noquery);
        if(client.player.isPlaying(message)) {
            let song = await client.player.addToQueue(message, args.join(' '));

            const added = new MessageEmbed()
            .setColor("8a8aff")
            .setTitle("**Aggiunta alla coda**")
            .setDescription(`\n${song.name}\`\n\nRichiesto da: ${message.author.username}`)
            .setThumbnail(song.thumbnail)


            
            if(song)
                message.channel.send(added);
            return;
        } else {
            let song = await client.player.play(message, args.join(' '));

            const started = new MessageEmbed()
         .setColor('#8A8AFF')
         .setTitle(`**Riproducendo**`)
            .setDescription(`\n${song.name}\n${song.url}\n\n`)
            .setFooter(`Requested by: ${message.author.username}`)

        .setImage(song.thumbnail)
      

            
            if(song)
                message.channel.send(started);
            return;
        }

		}
		}
}