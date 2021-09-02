const Discord = require("discord.js");
const db = require('quick.db');
const malScraper = require('mal-scraper');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
//

module.exports = {
  name: "anime",
  category: "🔎search",
  description: "Get info about an anime",
  usage: "[command | Anime]",
  run: async (client, message, args) => {
     var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
    //command
    const search = `${args}`;
    if (!search)
      return message.reply({embed : {
    description : `${error} Please add a search query!`,
    color : error_color
  }}
);

    malScraper.getInfoFromName(search)
      .then((data) => {
        const malEmbed = new Discord.MessageEmbed()
          .setAuthor(`My Anime List search result for ${args}`.split(',').join(' '))
          .setThumbnail(data.picture)
          .setColor('RANDOM') //What ever u want color!
          .addField('Premiered', `\`${data.premiered}\``, true)
          .addField('Broadcast', `\`${data.broadcast}\``, true)
          .addField('Genres', `\`${data.genres}\``, true)
          .addField('English Title', `\`${data.englishTitle}\``, true)
          .addField('Japanese Title', `\`${data.japaneseTitle}\``, true)
          .addField('Type', `\`${data.type}\``, true)
          .addField('Episodes', `\`${data.episodes}\``, true)
          .addField('Rating', `\`${data.rating}\``, true)
          .addField('Aired', `\`${data.aired}\``, true)
          .addField('Score', `\`${data.score}\``, true)
          .addField('Favorite', `\`${data.favorites}\``, true)
          .addField('Ranked', `\`${data.ranked}\``, true)
          .addField('Duration', `\`${data.duration}\``, true)
          .addField('Studios', `\`${data.studios}\``, true)
          .addField('Popularity', `\`${data.popularity}\``, true)
          .addField('Members', `\`${data.members}\``, true)
          .addField('Score Stats', `\`${data.scoreStats}\``, true)
          .addField('Source', `\`${data.source}\``, true)
          .addField('Synonyms', `\`${data.synonyms}\``, true)
          .addField('Status', `\`${data.status}\``, true)
          .addField('Identifier', `\`${data.id}\``, true)
          .addField('Link', data.url, true)
          .setTimestamp()
          .setFooter(`Requested ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(malEmbed);

      })
  }

  if(lang === 'it') {

        //command
    const search = `${args}`;
    if (!search)
      return message.reply({embed : {
    description : `${error} Perfavore provvedi una ricerca!`,
    color : error_color
  }}
);

    malScraper.getInfoFromName(search)
      .then((data) => {
        const malEmbed = new Discord.MessageEmbed()
          .setAuthor(`My Anime List ricerca risultato di ${args}`.split(',').join(' '))
          .setThumbnail(data.picture)
          .setColor('RANDOM') //What ever u want color!
          .addField('Premiato', `\`${data.premiered}\``, true)
          .addField('Broadcast', `\`${data.broadcast}\``, true)
          .addField('Genere', `\`${data.genres}\``, true)
          .addField('Titolo Inglese', `\`${data.englishTitle}\``, true)
          .addField('Titolo Giapponese', `\`${data.japaneseTitle}\``, true)
          .addField('Tipologia', `\`${data.type}\``, true)
          .addField('Episodi', `\`${data.episodes}\``, true)
          .addField('Rating', `\`${data.rating}\``, true)
          .addField('In onda', `\`${data.aired}\``, true)
          .addField('Punti', `\`${data.score}\``, true)
          .addField('Preferito', `\`${data.favorites}\``, true)
          .addField('Classificato', `\`${data.ranked}\``, true)
          .addField('Durata', `\`${data.duration}\``, true)
          .addField('Studio', `\`${data.studios}\``, true)
          .addField('Popolarità', `\`${data.popularity}\``, true)
          .addField('Membri', `\`${data.members}\``, true)
          .addField('Statistiche Punteggio', `\`${data.scoreStats}\``, true)
          .addField('Fonte', `\`${data.source}\``, true)
          .addField('Sinonimi', `\`${data.synonyms}\``, true)
          .addField('Stato', `\`${data.status}\``, true)
          .addField('identificatore', `\`${data.id}\``, true)
          .addField('Link', data.url, true)
          .setTimestamp()
          .setFooter(`Richiesto da ${message.member.displayName}`,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(malEmbed);

      })

  }
  }
};

