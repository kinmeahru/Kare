const discord = require("discord.js");//

module.exports = {
  name: "invite",
  category: "📰info",
  description: "Get the invite of this cooooool bot!!",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Here The Invite!<3`)
    .setDescription(`<:link:845315257430048788>  [Click Here!](https://discord.com/oauth2/authorize?client_id=869537614796034128&scope=bot&permissions=8589934583)`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}