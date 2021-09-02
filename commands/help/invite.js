const discord = require("discord.js");//
const db = require('quick.db')
const { main_color } = require('../../config.json')
module.exports = {
  name: "invite",
  category: "📰info",
  description: "Get the invite of this cooooool bot!!",
  run: async (client, message, args) => {
    var lang = await db.get(`language_${message.guild.id}`)
    if(!lang) lang = 'en'


    if(lang === 'en') {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Here the invite!`)
    .setDescription(`<:link:845315257430048788>  [Click Here!](https://discord.com/api/oauth2/authorize?client_id=869537614796034128&permissions=158913789687&scope=bot%20applications.commands)`)
    .setColor(main_color)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
  if(lang === 'it') {
       
    let embed = new discord.MessageEmbed()
    .setTitle(`Ecco l'invito!`)
    .setDescription(`<:link:845315257430048788>  [Clicca qui!](https://discord.com/api/oauth2/authorize?client_id=869537614796034128&permissions=158913789687&scope=bot%20applications.commands)`)
    .setColor(main_color)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
  }
  if(lang === 'de') {
       
    let embed = new discord.MessageEmbed()
    .setTitle(`Hier ist die Einladung!`)
    .setDescription(`<:link:845315257430048788>  [Hier klicken!](https://discord.com/api/oauth2/authorize?client_id=869537614796034128&permissions=158913789687&scope=bot%20applications.commands)`)
    .setColor(main_color)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
  }
}
}