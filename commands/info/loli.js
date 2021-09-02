const Discord = require("discord.js")//
const db = require("quick.db")

module.exports = {
  name: "loli",

  run:async (client, message, args) => {
    
   
    const embed = new Discord.MessageEmbed()
    .setTitle("Onii-chan that's illegal!")
    .setAuthor(message.author.username)
    .setImage("https://cdn.discordapp.com/attachments/860867389527949334/861725712562257960/4cshc2.png")
    
    .setColor("00FFFF")
    .setTimestamp();
    
    message.channel.send(embed)
   
    
  }
}