const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const db = require("quick.db")
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
    name: 'hack',
    category: '🎆fun',
    
run: async (client, message, args) => {

   var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
   // 
       


       const user = await message.mentions.users.first()
        if(!user) return message.channel.send({embed : {
    description : `${error} Hey slow down! Who we hacking! mention an user!`,
    color : error_color
  }})
        

        message.channel.send(`Hacking @${user.username} now...`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`[▝]Finding IP address`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[▗] **IP ADDRESS** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[▖] Selling data to the Government...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[▘] Reporting account to discord for breaking TOS...`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[▝] Finding Email Address...`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[▗] **Email Address** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[▖] Hacking Epic Games Account...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[▘] Hacking medical records...`);
          },  12000)
         setTimeout(function() {
            msg.edit(`Finished hacking @${user.username}`);
         }, 13500)
         setTimeout(function() {
            message.channel.send(`The *totally* \`real\` and \`dangerous\` hack is complete`)
         }, 15000)
         });

  
    }
    if(lang === 'it') {

      
       const user = await message.mentions.users.first()
        if(!user) return message.channel.send({embed : {
    description : `${error} Hey vai piano! chi stiamo hackerando? menziona un utente!`,
    color : error_color
  }})
        

        message.channel.send(`Hackerando @${user.username}...`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`[▝]Cercare indirizzo IP`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[▗] **INDIRIZZO IP** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[▖] Vendendo informazioni al Governo...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[▘] Segnalazione account a discord per rottura del TOS...`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[▝] Cercare indirizzo email...`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[▗] **indirizzo Email** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[▖] Hackerando Account Epic Games...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[▘] Hackerando le cartelle cliniche...`);
          },  12000)
         setTimeout(function() {
            msg.edit(`Finito di hackerare @${user.username}`);
         }, 13500)
         setTimeout(function() {
            message.channel.send(`${success} Il *Totalmente* \`Reale\` e \`Pericolossissimo\` hack è completo`)
         }, 15000)
         });

    }
    if(lang === 'de') {

      
       const user = await message.mentions.users.first()
        if(!user) return message.channel.send({embed : {
    description : `${error} Hey, nimm es nicht ernst! wen hacken wir? ein Benutzer erwähnt!`,
    color : error_color
  }})
        

        message.channel.send(`Hacken @${user.username}...`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`[▝]IP-Adresse suchen`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[▗] **IP ADRESSE** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[▖] Durch den Verkauf von Informationen an die Regierung...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[▘] Kontoberichterstattung an Discord für TOS-Aufschlüsselung...`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[▝] E-Mail-Adresse suchen...`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[▗] **E-Mail-Addresse** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[▖] Epic Games-Konto hacken...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[▘] Krankenakten hacken...`);
          },  12000)
         setTimeout(function() {
            msg.edit(`Fertig gehackt @${user.username}`);
         }, 13500)
         setTimeout(function() {
            message.channel.send(`${success} Der *Totally* \`Real\` und \`Very Dangerous\` Hack ist abgeschlossen`)
         }, 15000)
         });

    }
}
}