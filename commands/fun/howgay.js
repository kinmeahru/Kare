const Discord = require('discord.js')
const db = require('quick.db');

module.exports = {
    name: "howgay",
    category: "🎆fun",
    description: "how much gay is @user?",
    

    async run (bot, message, args) {

 var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {

        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);
        
        const howgayembed = new Discord.MessageEmbed()
        .setTitle('Gay Machine Calculator')
        .setDescription(`${member.username} is ` + rng + "% Gay 🌈")
        .setColor("GREEN")

        message.channel.send(howgayembed);
    }

 if(lang === 'it') {

      let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);
        
        const howgayembed = new Discord.MessageEmbed()
        .setTitle('Calcolatrice Gay Machine')
        .setDescription(`${member.username} è ` + rng + "% Gay 🌈")
        .setColor("GREEN")

        message.channel.send(howgayembed);

 }  
  if(lang === 'de') {

      let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);
        
        const howgayembed = new Discord.MessageEmbed()
        .setTitle('Taschenrechner Gay Machine')
        .setDescription(`${member.username} ist ` + rng + "% Gay 🌈")
        .setColor("GREEN")

        message.channel.send(howgayembed);

 }  
}
}