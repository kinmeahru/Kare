const discord_akairo_1 = require("discord-akairo");
const Discord = require('discord.js')
const db = require("quick.db")
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
    name: 'hack',
    category: 'ðfun',
    
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
            msg.edit(`[â]Finding IP address`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[â] **IP ADDRESS** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[â] Selling data to the Government...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[â] Reporting account to discord for breaking TOS...`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[â] Finding Email Address...`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[â] **Email Address** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[â] Hacking Epic Games Account...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[â] Hacking medical records...`);
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
            msg.edit(`[â]Cercare indirizzo IP`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[â] **INDIRIZZO IP** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[â] Vendendo informazioni al Governo...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[â] Segnalazione account a discord per rottura del TOS...`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[â] Cercare indirizzo email...`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[â] **indirizzo Email** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[â] Hackerando Account Epic Games...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[â] Hackerando le cartelle cliniche...`);
          },  12000)
         setTimeout(function() {
            msg.edit(`Finito di hackerare @${user.username}`);
         }, 13500)
         setTimeout(function() {
            message.channel.send(`${success} Il *Totalmente* \`Reale\` e \`Pericolossissimo\` hack Ã¨ completo`)
         }, 15000)
         });

    }
    if(lang === 'de') {

      
       const user = await message.mentions.users.first()
        if(!user) return message.channel.send({embed : {
    description : `${error} Hey, nimm es nicht ernst! wen hacken wir? ein Benutzer erwÃ¤hnt!`,
    color : error_color
  }})
        

        message.channel.send(`Hacken @${user.username}...`)
        .then((msg) => {
            setTimeout(function() {
            msg.edit(`[â]IP-Adresse suchen`);
          }, 1500)
            setTimeout(function() {
            msg.edit(`[â] **IP ADRESSE** : 127.0.0.1:2643`);
          }, 3000)
          setTimeout(function() {
            msg.edit(`[â] Durch den Verkauf von Informationen an die Regierung...`);
          }, 4500)
          setTimeout(function() {
            msg.edit(`[â] Kontoberichterstattung an Discord fÃ¼r TOS-AufschlÃ¼sselung...`);
          }, 6000)
          setTimeout(function() {
            msg.edit(`[â] E-Mail-Adresse suchen...`);
          }, 7500)
          setTimeout(function() {
            msg.edit(`[â] **E-Mail-Addresse** : ${user.username}@gmail.com`);
          }, 9000)
          setTimeout(function() {
            msg.edit(`[â] Epic Games-Konto hacken...`);
          },  10500)
          setTimeout(function() {
            msg.edit(`[â] Krankenakten hacken...`);
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