const superagent = require("snekfetch");
const Discord = require('discord.js')
const db = require('quick.db');
//

module.exports = {
  name: "dog",
  category: "🖼Image",
description: "Sends a random dog image",
usage: "[command]",
run: async (client, message, args) => {

    var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
      
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("a Dog")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`:=)`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}


if(lang === 'it') {
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
    const lewdembed = new Discord.MessageEmbed()
  .setTitle("Un Cane")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`:=)`)
  .setURL(response.body.url);
message.channel.send(lewdembed);

    })
    }

if(lang === 'de') {
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
    const lewdembed = new Discord.MessageEmbed()
  .setTitle("Ein Hund")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`:=)`)
  .setURL(response.body.url);
message.channel.send(lewdembed);

    })
    }

}

};