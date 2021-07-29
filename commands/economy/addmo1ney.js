const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
   
        name: "addmoney",
        aliases: ["am"],
        category: "💰economy",
        description: "Adds Money to a user",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    ,
    run: async (bot, message, args) => {
      var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') { 
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed : {
    description : `${error}You don't have permission to add money!`,
    color : error_color  
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${error}Please mention a user!`,
    color : error_color 
  }})

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send({embed : {
    description : `${warning}Please mention a valid user!`,
    color : warning_color  
  }})
        if (!args[1]) return message.channel.send({embed : {
    description : `${warning}Please add an amount!`,
    color : warning_color
  }})
        if (isNaN(args[1])) return message.channel.send({embed : {
    description : `${error}This amount it's not valid!`,
    color : error_color
  }});
        if (args[0] > 10000) return message.channel.send({embed : {
    description : `${error}I can't add this amount!`,
    color : error_color  
  }})
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Added ${args[1]} coins\n\nNew Balance: ${bal}`);
        message.channel.send(moneyEmbed)
    }


if(lang == 'it') {

 if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed : {
    description : `${error}Non hai i permessi per aggiungere soldi!`,
    color : error_color
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${warning}Perfavore menziona un utente!`,
    color : warning_color
  }})

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send({embed : {
    description : `${warning}Perfavore menziona un utente valido!`,
    color : warning_color
  }})
        if (!args[1]) return message.channel.send({embed : {
    description : `${warning}Perfavore aggiungi una cifra!`,
    color : warning_color  
  }})
        if (isNaN(args[1])) return message.channel.send({embed : {
    description : `${error}Questa cifra non è un numero valido!`,
    color : error_color
  }});
        if (args[0] > 10000) return message.channel.send({embed : {
    description : `${error}Non posso aggiungere questa cifra!`,
    color : error_color
  }})
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Aggiunti ${args[1]} coins\n\nNuovo Balance: ${bal}`);
        message.channel.send(moneyEmbed)
} 

if(lang == 'de') {

 if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed : {
    description : `${error}Sie sind nicht berechtigt, Geld hinzuzufügen!`,
    color : error_color
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${warning}Bitte erwähnen Sie einen Benutzer!`,
    color : warning_color
  }})

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send({embed : {
    description : `${warning}Bitte geben Sie einen gültigen Benutzer an!`,
    color : warning_color
  }})
        if (!args[1]) return message.channel.send({embed : {
    description : `${warning}Bitte fügen Sie eine Nummer hinzu!`,
    color : warning_color  
  }})
        if (isNaN(args[1])) return message.channel.send({embed : {
    description : `${error}Diese Ziffer ist keine gültige Zahl!`,
    color : error_color
  }});
        if (args[0] > 10000) return message.channel.send({embed : {
    description : `${error}Ich kann diese Zahl nicht hinzufügen!`,
    color : error_color
  }})
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Hinzugefügt ${args[1]} coins\n\nNeues Balance: ${bal}`);
        message.channel.send(moneyEmbed)
} 
}
}