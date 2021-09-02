const { Random } = require("something-random-on-discord")
const { MessageEmbed } = require("discord.js")
const random = new Random();
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
//
module.exports = {
  name: "advice",
  category: "🎆fun",
  description: "Get some advice",
  run: async (client, message, args) => {
    
    
    let data = await random.getAdvice()

    message.channel.send(data)
    
  }
}