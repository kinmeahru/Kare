const Discord = require('discord.js');
const backup = require('discord-backup'); //
const db = require('quick.db')
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
    name: 'info-backup',
    
    category: '🔐backup',
    info: "Get info of a backup",
    usage: "--info-backup <Backup ID>",
    

   run: async (client, message, args) => {

     var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {




    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.lineReplyNoMention({embed : {
    description : `${error}You don't have permissions`,
    color : error_color
  }});
    }

    const backupID = args.join(' ');

    if (!backupID) { 
        return message.channel.send({embed : {
    description : `${error}Please enter a valid backup id`,
    color : error_color
  }});
    };

    backup.fetch(backupID).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

        const embed = new Discord.MessageEmbed()
            .setAuthor('Backup', backup.data.iconURL)
            .addField('Server Name', backup.data.name)
            .addField('Size', backup.size + ' kb')
            .addField('Create at', formattedDate)
            .setFooter(`Backup ID: ${backup.id}`);

        return message.channel.send(embed);

    }).catch((err) => {

        if (err === 'No backup found')
            return message.channel.send({embed : {
    description : 'Backup-id '+backupID+' invalid',
    color : `RED`  
  }}
  );
        else
            return message.channel.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));

    });
}



//italian

if(lang === 'it') {




    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed : {
    description : `${error}Non hai il permesso dell'amministratore per fare un backup in questo server`,
    color : error_color  
  }});
    }

    const backupID = args.join(' ');

    if (!backupID) { 
        return message.channel.send({embed : {
    description : `${error}Perfavore specifa un valido backup-id`,
    color : error_color 
  }}); t
    };

    backup.fetch(backupID).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

        const embed = new Discord.MessageEmbed()
            .setAuthor('Backup', backup.data.iconURL)
            .addField('Nome server', backup.data.name)
            .addField('Dimensione', backup.size + ' kb')
            .addField('Creato il', formattedDate)
            .setFooter('Backup ID: '+backup.id);

        return message.channel.send(embed);

    }).catch((err) => {

        if (err === 'No backup found')
            return message.channel.send({embed : {
    description : 'Backup-id '+backupID+' non valido',
    color : `RED`  
  }}
  );
        else
            return message.channel.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));

    });
}
if(lang === 'de') {




    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed : {
    description : `${error}Sie haben keine Administratorberechtigung, um auf diesem Server ein Backup zu erstellen`,
    color : error_color  
  }});
    }

    const backupID = args.join(' ');

    if (!backupID) { 
        return message.channel.send({embed : {
    description : `${error}Bitte geben Sie eine gültige Backup-ID an`,
    color : error_color 
  }}); t
    };

    backup.fetch(backupID).then((backup) => {

        const date = new Date(backup.data.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
        const formattedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;

        const embed = new Discord.MessageEmbed()
            .setAuthor('Backup', backup.data.iconURL)
            .addField('Servername', backup.data.name)
            .addField('Abmessungen', backup.size + ' kb')
            .addField('Erstellt am', formattedDate)
            .setFooter('Backup ID: '+backup.id);

        return message.channel.send(embed);

    }).catch((err) => {

        if (err === 'Keine Sicherung gefunden')
            return message.channel.send({embed : {
    description : `ungültige Backup-ID ${backupID}`,
    color : `RED`  
  }}
  );
        else
            return message.channel.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));

    });
}

   }

  }

