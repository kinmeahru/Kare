const Discord = require('discord.js') 
const { main_color, success_color, error_color, warning_color, success, warning, error, diskspin } = require('../../config.json');
const db = require('quick.db')

module.exports = {
  name: 'roleinfo',
  run: async (client, message, args) => { 

    var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    let role; 

    if (!args[0]) return message.reply({embed : {
      description: `${error} Provide a role name or ID!`,
      color: error_color
    }}) 

    if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first()

    if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){  


      role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim()) 

      
      if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.reply({embed : {
        description : `${error} Role not found!`,
        color : error_color
      }})
    }


    if(args[0] && !isNaN(args[0])){

      
      role = message.guild.roles.cache.find(e => e.id == args[0])

    
      if(!message.guild.roles.cache.has(args[0])) return message.reply({embed : {
        description : `${error} This ID is invalid!`,
        color : error_color
      }})
    }
  
   
    if(!role) return message.reply({embed : {
      description : `${error} Mention a role!`,
      color : error_color
    }})


  let WithRole; 

  
  if(role.members.size > 5) WithRole = role.members.map(e => `<@${e.id}>`).slice(0,5).join(", ") + ` and ${role.members.size - 5} more members...` 

  
  if(role.members.size < 5) WithRole = role.members.map(e => `<@${e.id}>`).join(", ")
    
 
    let embed = new Discord.MessageEmbed()
    .setColor(role.color) 
    .setAuthor(message.guild.name, message.guild.iconURL()) 
    .setDescription(`**Role Name:** ${role.name}, (<@&${role.id}>)
    **Role ID:** **\`${role.id}\`**
    **Role Mentionable:** ${role.mentionable.toString().replace("true","Yes").replace("false","No")}
    **Role Members Size:** ${role.members.size || 0}`)

  .addField("Role Members:",WithRole ? WithRole : "No one have the role")
  
    message.channel.send(embed) 
  }

  if(lang === 'it') {

        let role; 

    if (!args[0]) return message.reply({embed : {
      description: `${error} Provvedi un nome o un ID di un ruolo!`,
      color: error_color
    }}) 

    if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first()

    if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){  


      role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim()) 

      
      if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.reply({embed : {
        description : `${error} Ruolo non trovato!`,
        color : error_color
      }})
    }


    if(args[0] && !isNaN(args[0])){

      
      role = message.guild.roles.cache.find(e => e.id == args[0])

    
      if(!message.guild.roles.cache.has(args[0])) return message.reply({embed : {
        description : `${error} Questo ID non è valido!`,
        color : error_color
      }})
    }
  
   
    if(!role) return message.reply({embed : {
      description : `${error} Menziona un ruolo!`,
      color : error_color
    }})


  let WithRole; 

  
  if(role.members.size > 5) WithRole = role.members.map(e => `<@${e.id}>`).slice(0,5).join(", ") + ` e ${role.members.size - 5} altri utenti...` 

  
  if(role.members.size < 5) WithRole = role.members.map(e => `<@${e.id}>`).join(", ")
    
 
    let embed = new Discord.MessageEmbed()
    .setColor(role.color) 
    .setAuthor(message.guild.name, message.guild.iconURL()) 
    .setDescription(`**Nome Ruolo:** ${role.name}, (<@&${role.id}>)
    **ID Ruolo:** **\`${role.id}\`**
    **Ruolo Menzionabile:** ${role.mentionable.toString().replace("Vero","Sì").replace("Falso","No")}
    **Dimensione membri ruolo:** ${role.members.size || 0}`)

  .addField("Utenti con questo ruolo:",WithRole ? WithRole : "Nessuno ha questo ruolo")
  
    message.channel.send(embed) 

  }
  if(lang === 'de') {

        let role; 

    if (!args[0]) return message.reply({embed : {
      description: `${error} Geben Sie einen Rollennamen oder eine ID an`,
      color: error_color
    }}) 

    if(args[0] && isNaN(args[0]) && message.mentions.roles.first()) role = message.mentions.roles.first()

    if(args[0] && isNaN(args[0]) && !message.mentions.roles.first()){  


      role = message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim()) 

      
      if(!message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == args.slice(0).join(" ").toLowerCase().trim())) return message.reply({embed : {
        description : `${error} Rolle nicht gefunden!`,
        color : error_color
      }})
    }


    if(args[0] && !isNaN(args[0])){

      
      role = message.guild.roles.cache.find(e => e.id == args[0])

    
      if(!message.guild.roles.cache.has(args[0])) return message.reply({embed : {
        description : `${error} Diese ID ist nicht gültig!`,
        color : error_color
      }})
    }
  
   
    if(!role) return message.reply({embed : {
      description : `${error} Nennen Sie eine Rolle!`,
      color : error_color
    }})


  let WithRole; 

  
  if(role.members.size > 5) WithRole = role.members.map(e => `<@${e.id}>`).slice(0,5).join(", ") + ` e ${role.members.size - 5} altri utenti...` 

  
  if(role.members.size < 5) WithRole = role.members.map(e => `<@${e.id}>`).join(", ")
    
 
    let embed = new Discord.MessageEmbed()
    .setColor(role.color) 
    .setAuthor(message.guild.name, message.guild.iconURL()) 
    .setDescription(`**Rollenname:** ${role.name}, (<@&${role.id}>)
    **Rollen-ID:** **\`${role.id}\`**
    **Erwähnenswerte Rolle:** ${role.mentionable.toString().replace("Wahr","Jep").replace("Falsch","Nein")}
    **Rollenmitgliedsdimension:** ${role.members.size || 0}`)

  .addField("Benutzer mit dieser Rolle:",WithRole ? WithRole : "Niemand hat diese Rolle")
  
    message.channel.send(embed) 

  }
}
}