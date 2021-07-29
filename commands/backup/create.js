const backup = require('discord-backup'); //
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
    name: "create-backup",
    aliases: [],
    category: "🔐backup",
    usage: "--backup-create",
    description: "Create a backup of the server",
    run: async (client, message, args) => {
  

          var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {  
     if(!message.member.hasPermission({ checkOwner: true})){
        return message.channel.send({embed : {
    description : `${error}You don't have permission to create a backup of this server!`,
    color : error_color
  }});
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send({embed : {
    description : (`${success}**Backup created!**\n\n**Backup-ID:**\n||${backupData.id}||\n`),
    color : success_color  
  }}
          
    );

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please report to the Support server ');

    });

}



if(lang === 'it') {

  if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed : {
    description : `${error}Non hai i permessi per fare un backup di questo server!`,
    color : error_color
  }});
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send({embed : {
    description : (`${success}**Backup creato!**\n\n**Backup-ID:**\n||${backupData.id}||\n`),
    color : success_color
  }}
          
    );

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please report to the Support server ');

    });

}



if(lang === 'de') {

  if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed : {
    description : `${error}Sie sind nicht berechtigt, diesen Server zu sichern!`,
    color : error_color
  }});
    }

    backup.create(message.guild).then((backupData) => {

        return message.channel.send({embed : {
    description : (`${success}**Backup erstellt!**\n\n**Backup-ID:**\n||${backupData.id}||\n`),
    color : success_color
  }}
          
    );

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please report to the Support server ');

    });

}

    }

}