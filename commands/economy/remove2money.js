const { MessageEmbed }= require("discord.js");
const db = require("quick.db");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
    
        name: "removemoney",
        aliases: ["rm"],
        category: "💰economy",
        description: "Removes money from a user",
        usage: "[ mention | ID]",
        accessableby: "Administrator, Owner"
    ,
    run: async (bot, message, args) => {
          var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
          if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed : {
    description : `${error}You don't have permission for reomve money!`,
    color : error_color 
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${warning}Please mention an user!`,
    color : warning_color
  }})

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send({embed : {
    description : `${warning}Please mention a valid user!`,
    color : warning_color
  }})

        if (!args[1]) return message.channel.send({embed : {
    description : `${warning}Please enter an amount!`,
    color : warning_color
  }})
        if (isNaN(args[1])) return message.channel.send({embed : {
    description : `${warning}Please enter a valid amount!`,
    color : warning_color
  }});
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send({embed : {
    description : `${error}I can't `,
    color : error_color
  }})
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Removed ${args[1]} coins\n\nNew Balance: ${bal2}`);
        message.channel.send(moneyEmbed)
}

if(lang === 'it') {
          if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed : {
    description : `${error}Non hai i permessi per rimuovere i soldi!`,
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
    description : `${warning}Perfavore inserisci una quantità!`,
    color : warning_color
  }})
        if (isNaN(args[1])) return message.channel.send({embed : {
    description : `${warning_color}Perfavore inserisci una quantità valida!`,
    color : warning
  }});
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send({embed : {
    description : `${error}Non posso rimuovere tutti questi soldi!`,
    color : error_color
  }})
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Rimossi ${args[1]} coins\n\nNuovo Balance: ${bal2}`);
        message.channel.send(moneyEmbed)
}

if(lang === 'de') {
          if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({embed : {
    description : `${error}Sie haben keine Berechtigung, das Geld zu entfernen!`,
    color : error_color
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${warning}Bitte nennen Sie einen Benutzer!`,
    color : warning_color
  }})

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send({embed : {
    description : `${warning}Bitte geben Sie einen gültigen Benutzer an!`,
    color : warning_color
  }})

        if (!args[1]) return message.channel.send({embed : {
    description : `${warning}Bitte geben Sie eine Menge ein!`,
    color : warning_color
  }})
        if (isNaN(args[1])) return message.channel.send({embed : {
    description : `${warning_color}Bitte geben Sie eine gültige Menge ein!`,
    color : warning
  }});
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send({embed : {
    description : `${error}Ich kann das ganze Geld nicht entfernen!`,
    color : error_color
  }})
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor(success_color)
            .setDescription(`${success} Entfernt ${args[1]} coins\n\nNeues Balance: ${bal2}`);
        message.channel.send(moneyEmbed)
}
    }
}