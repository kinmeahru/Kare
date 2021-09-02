const superagent = require("snekfetch");
const Discord = require('discord.js')
const { main_color } = require('quick.db')
//

module.exports = {
  name: "goose",
  category: "🖼Image",
description: "Sends a random image of a cat",
usage: "[command]",
run: async (client, message, args, level) => {
  var lang = await db.get(`language_${message.guild.id}`)
    if(!lang) lang = 'en'


    if(lang === 'en') {
//command
superagent.get('https://nekos.life/api/v2/img/goose')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Goose")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
    }
    if(lang === 'it') {
      //command
superagent.get('https://nekos.life/api/v2/img/goose')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Papera")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
    }
     if(lang === 'de') {
      //command
superagent.get('https://nekos.life/api/v2/img/goose')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Gänschen")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
    }
}
};