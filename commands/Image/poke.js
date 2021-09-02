const superagent = require("snekfetch");
const Discord = require('discord.js')


const { error_color, success_color, warning_color, warning, success, error, music, music_color, volumee, main_color } = require('../../config.json')
const db = require('quick.db')
module.exports = {
  name: "poke",
  aliases: [],
  category: "🔞nsfw",
  description: "Get some wallpapers",
  run: async (client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
   

    superagent.get('https://nekos.life/api/v2/img/poke')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Poke")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})

    
}

}
  }
