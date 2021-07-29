const { MessageEmbed } = require('discord.js');
const { PREFIX } = require('../../config');
const db = require('quick.db');
const { prefix } = require('../../config');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');


   module.exports = {
  name: "shop",
  description: "shop ",
  category: "💰economy",
 run: async (bot, message, args) => {
             var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let embed = new MessageEmbed()
            .setDescription(`**VIP Ranks**\n\nBronze: 200 Coins [${prefix}buy/${prefix}sell bronze]\n\n**Lifestyle Items**\n\nNikes: 600 [${prefix}buy/${prefix}sell nikes]\nCar: 800 [${prefix}buy/${prefix}sell car]\nMansion: 1200 [${prefix}buy/${prefix}sell mansion]`)
            .setColor("GREEN")
        message.channel.send(embed)
    }


if(lang === 'it') {

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let embed = new MessageEmbed()
            .setDescription(`**Ranghi Vip**\n\nBronzo: 200 Coins [${prefix}buy/${prefix}sell bronze]\n\n**Oggetti Estetici**\n\nNikes: 600 [${prefix}buy/${prefix}sell nikes]\nMacchina: 800 [${prefix}buy/${prefix}sell car]\nDimora: 1200 [${prefix}buy/${prefix}sell mansion]`)
            .setColor("GREEN")
        message.channel.send(embed)
    }
if(lang === 'de') {

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = PREFIX
        } else {
            prefix = fetched
        }
      
        let embed = new MessageEmbed()
            .setDescription(`**VIP-Ränge**\n\nBronze: 200 Coins [${prefix}buy/${prefix}sell bronze]\n\n**Ästhetische Objekte**\n\nNikes: 600 [${prefix}buy/${prefix}sell nikes]\nWagen: 800 [${prefix}buy/${prefix}sell car]\nVilla: 1200 [${prefix}buy/${prefix}sell mansion]`)
            .setColor("GREEN")
        message.channel.send(embed)
    }
}
   }