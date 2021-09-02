const superagent = require("snekfetch");
const Discord = require('discord.js')
const { main_color } = require('../../config.json')

module.exports = {
  name: "waifu",
  category: "🖼Image",
description: "Sends a random image of a cat",
usage: "[command]",
run: async (client, message, args, level) => {
//command
superagent.get('https://nekos.life/api/v2/img/waifu')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Waifu")
  .setImage(response.body.url)
  .setColor(main_color)
  .setFooter(`Akimi`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};