const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
module.exports = {
    name: "coinflip",
    category: ["🕹Games"],
    aliases: ["cf"],
    description: "flips a coin!",
    run: async(client, message, args) => {
       var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a :coin:**${choice}**!`)
        message.channel.send(embed)
    }
    if(lang === 'it') {
    const choices= ["testa", "croce"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`Hai capovolto una :coin:**${choice}**!`)
        message.channel.send(embed)

    }

    if(lang === 'de') {
    const choices= ["Kopf", "Kreuz"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`Du hast einen umgedreht :coin:**${choice}**!`)
        message.channel.send(embed)

    }
    }
}