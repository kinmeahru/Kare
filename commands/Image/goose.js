const superagent = require("snekfetch");
const Discord = require('discord.js')
//

module.exports = {
  name: "goose",
  category: "🖼Image",
description: "Sends a random image of a cat",
usage: "[command]",
run: async (client, message, args, level) => {
//command
superagent.get('https://nekos.life/api/v2/img/goose')
    .end((err, response) => {
  const lewdembed = new Discord.MessageEmbed()
  .setTitle("Goose")
  .setImage(response.body.url)
  .setColor(`#000000`)
  .setFooter(`._.`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};