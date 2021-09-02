const fetch = require("node-fetch")
const { MessageEmbed, MessageMentions } = require('discord.js')
const db = require('quick.db');
module.exports = {
    name: "deepfry",
    description: "Deepfry someone!",
    category: ["🖼Image"],
    aliases: ["df"],
    run: async(client, message, args) => {
      
         var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        const user = message.mentions.members.first() || message.member || message.guild.users.cache.get(u => u.id === args[0])
        const avatar = user.user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Deepfried!")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send(embed)
        })
    }

if(lang === 'it') {
        const user = message.mentions.members.first() || message.member || message.guild.users.cache.get(u => u.id === args[0])
        const avatar = user.user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Fritto!")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send(embed)
        })

}
if(lang === 'de') {
        const user = message.mentions.members.first() || message.member || message.guild.users.cache.get(u => u.id === args[0])
        const avatar = user.user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Gebraten!")
            .setImage(data.message)
            .setTimestamp()
            message.channel.send(embed)
        })

}

    }
}