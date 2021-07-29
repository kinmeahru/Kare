const discord = require("discord.js");//

module.exports = {
  name: "patreon",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Patreon`)
    .setDescription(`Why become a supporter?

Becoming a supporter leads to having access to many bot-exclusive commands, roles in the official [**server**](https://discord.gg/XNsDkk6mfr) discord and in the future exclusive commands for premium users!`)
    .setURL('https://www.patreon.com/kajirama')
    .setColor("RED")
    .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Patreon_logomark.svg/1200px-Patreon_logomark.svg.png')
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}