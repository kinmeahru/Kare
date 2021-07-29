const Discord = require("discord.js");
const fetch = require("node-fetch");//
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../config.json');
const db = require('quick.db')

module.exports = {
  name: "interest",
  aliases: [],
  category: "🖼Image",
  
  description: "Idk how to do a descritpion of this command",
  usage: "--love user1 user2 | --love id1 id2",
    run: async (bot, message, args) => {
            var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        
        let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[1].toLocaleLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[1].toLocaleLowerCase());
        if(!args[0]) return message.channel.send({embed : {
    description : `${error} Mention an user!`,
    color : error_color
  }})
        if(!args[1]) return message.channel.send({embed : {
    description : `${error} Mention the second user!`,
    color : error_color 
  }})
        
        if (!user) return message.channel.send({embed : {
    description : `${error} Please mention a valid user`,
    color : error_color
  }})
        if (!user2) return message.channel.send({embed : {
    description : `${error} Please mention a valid user`,
    color : error_color
  }})

        let m = await message.channel.send({embed : {
    description : `Please wait...`,
    color : `8A8AFF`
  }});
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${user.user.displayAvatarURL({ format: "png", size: 512 })}&user2=${user2.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "love.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("Error, Please Try Again! Mention Someone");
        }
    }

    if(lang === 'it') {

         let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() === args[1].toLocaleLowerCase()) || message.guild.members.cache.find(mp => mp.displayName.toLowerCase() === args[1].toLocaleLowerCase());
        if(!args[0]) return message.channel.send({embed : {
    description : `${error} Menziona un utente!`,
    color : error_color
  }})
        if(!args[1]) return message.channel.send({embed : {
    description : `${error} Menziona un secondo utente!`,
    color : error_color
  }})
        
        if (!user) return message.channel.send({embed : {
    description : `${error} Perfavore menziona un utente valido!`,
    color : error_color
  }})
        if (!user2) return message.channel.send({embed : {
    description : `${error} Perfavore menziona un utente valido!`,
    color : error_color
  }})

        let m = await message.channel.send({embed : {
    description : `Perfavore aspetta...`,
    color : `8A8AFF`  
  }});
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${user.user.displayAvatarURL({ format: "png", size: 512 })}&user2=${user2.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "love.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("Error, Please Try Again! Mention Someone");
        }

    }
    }
};