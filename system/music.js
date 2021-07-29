const ytdl = require("ytdl-core");
const { MessageEmbed } = require("discord.js");
const { QUEUE_LIMIT, COLOR } = require("../config.json");
const db = require('quick.db')
const { ytlogo } = require('../config.json')
module.exports = {
  async play(song, message, args) {
    var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    const queue = message.client.queue.get(message.guild.id);
    let embed = new MessageEmbed().setColor(COLOR);

    if (!song) {
      message.client.queue.delete(message.guild.id);
      
      embed.setDescription(
        `Song ended.`
      );
      return queue.textChannel.send(embed).catch(console.error);
    }

    try {
      var stream = await ytdl(song.url, {
        highWaterMark: 1 << 25
      });
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      if (error.message.includes === "copyright") {
        return message.channel.send(
          "© | Contents of this video are copyright protected."
        );
      } else {
        console.error(error);
      }
    }

    const dispatcher = queue.connection
      .play(stream)
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);

    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    embed
      .setAuthor(
        "💿 | Now Playing",
        message.client.user.displayAvatarURL()
      )
      .setDescription(`**[${song.title}](${song.url})**`)
      .setImage(`${song.thumbnail}`)
      .setFooter(
        `Duration : ${song.duration}`
      )
      .addField(`Playing In`, `${queue.channel}`, true)
      .addField(`Bound To`, `${queue.textChannel}`, true)
      .addField(`Requested By`, '<@' + message.author.id + '>', true)
      .setThumbnail(song.avatar);

    queue.textChannel
      .send(`👍🏼 **Joined** ${queue.channel} **and bound to** ${queue.textChannel}\n🎶** Playing** \`${song.title}\`\n**⏳ Duration** \`${song.duration}\``)
      .catch(err =>
        message.channel.send("Unable to play song | Report the bug please")
      );
  }
  if(lang === 'it') {
        const queue = message.client.queue.get(message.guild.id);
    let embed = new MessageEmbed().setColor(COLOR);

    if (!song) {
      message.client.queue.delete(message.guild.id);
      
      embed.setDescription(
        `Canzone terminata`
      );
      return queue.textChannel.send(embed).catch(console.error);
    }

    try {
      var stream = await ytdl(song.url, {
        highWaterMark: 1 << 25
      });
    } catch (error) {
      if (queue) {
        queue.songs.shift();
        module.exports.play(queue.songs[0], message);
      }

      if (error.message.includes === "copyright") {
        return message.channel.send(
          "© | Il contenuto di questo video è protetto da copyright."
        );
      } else {
        console.error(error);
      }
    }

    const dispatcher = queue.connection
      .play(stream)
      .on("finish", () => {
        if (queue.loop) {
          let lastsong = queue.songs.shift();
          queue.songs.push(lastsong);
          module.exports.play(queue.songs[0], message);
        } else {
          queue.songs.shift();
          module.exports.play(queue.songs[0], message);
        }
      })
      .on("error", console.error);

    dispatcher.setVolumeLogarithmic(queue.volume / 100); //VOLUME
    embed
      .setAuthor(
        "💿 | Riproducendo",
        message.client.user.displayAvatarURL()
      )
      .setDescription(`**[${song.title}](${song.url})**`)
      .setImage(`${song.thumbnail}`)
      .setFooter(
        `Durata : ${song.duration}`
      )
      .addField(`Riproduzione in`, `${queue.channel}`, true)
      .addField(`Eseguita in`, `${queue.textChannel}`, true)
      .addField(`Richiesto da`, '<@' + message.author.id + '>', true)
      .setThumbnail(song.avatar);

    queue.textChannel
      .send(`👍🏼 **Entrato in** ${queue.channel} **Richiesto in** ${queue.textChannel}\n🎶 **Riproducendo** \`${song.title}\`\n**⏳ Durata** \`${song.duration}\``)
      .catch(err =>
        message.channel.send("Unable to play song | Report the bug with --bug")
      );
  }
  }
};
