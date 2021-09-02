const Discord = require('discord.js')
const db = require('quick.db')
const prefix = require('../../config.json')
const { main_color, success_color, error_color, warning_color, success, warning, error, diskspin } = require('../../config.json');

module.exports = {
  name : 'set-language',
  description : 'To change the bot language',
  aliases: ["setlang"],
  usage : '<prefix>set-language',
  run : async(bot, message, args) =>{

var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
if(!message.member.hasPermission('MANAGE_GUILD')){
  return message.channel.send({embed : {
    description : `${error}You don't have enough permissions`,
    color : error_color
  }})
}

var bo = message.content.slice(prefix.length).trim().split(/ +/);
var gg = bo[1];


if(!gg){
  return message.channel.send({embed : {
   title : `${diskspin} Please choose a language`,
   color : main_color,
   description : `Available languages : \n🇺🇸 - English\n🇮🇹 - Italian\n:flag_de: - German`
  }})
}


var lang = [`en`,`english`,`it`,`italian`,`de`,`german`, 'owo', 'owo']
var ggg = message.content.split(" ")
if(ggg[1] && !lang.includes(ggg[1].toLowerCase())) {
  return message.channel.send({embed : {
    description : `${error}I can't find this language`,
    color : error_color
  }})
}

if (gg.toLowerCase() === `en` || gg.toLowerCase() === `english`) {
  db.set(`language_${message.guild.id}`, 'en')
  return message.channel.send({embed : {
    description : `${error} This language is already setted!`,
		color : error_color

  }})
}

if (gg.toLowerCase() === `it` || gg.toLowerCase() === `italian`) {
  db.set(`language_${message.guild.id}`, `it`)
  return message.channel.send({embed : {
    description : `:flag_it: - Language successfully changed to italian`,
		color : main_color
  }})
} 

if (gg.toLowerCase() === `de` || gg.toLowerCase() === `german`) {
  db.set(`language_${message.guild.id}`, `de`)
  return message.channel.send({embed : {
    description : `:flag_de: - Language successfully changed to german`,
		color : main_color
  }})
} 

if (gg.toLowerCase() === `owo` || gg.toLowerCase() === `owo`) {
  db.set(`language_${message.guild.id}`, `owo`)
  return message.channel.send({embed : {
    description : `(^///^) - Language successfully changed to OwO`,
		color : main_color
  }})
} 




/*this is the basic
* var lang = await db.get(`language_${message.guild.id}`)
if (!lang) lang = 'en' // add this to all commands in the first 

if (lang === 'en') {
  do the code here
}

if (lang === 'it') {
  do the code here
}

 */
}
if(lang === 'it') {
  if(!message.member.hasPermission('MANAGE_GUILD')){
  return message.channel.send({embed : {
    description : `${error} Non hai abbastanza permessi!`,
    color : error_color
  }})
}

var bo = message.content.slice(prefix.length).trim().split(/ +/);
var gg = bo[1];


if(!gg){
  return message.channel.send({embed : {
   title : `${diskspin} Perfavore scegli una lingua`,
   color : main_color,
   description : `Lingue disponibili : \n🇺🇸 - English\n🇮🇹 - Italian\n:flag_de: - German`
  }})
}


var lang = [`en`,`english`,`it`,`italian`,`de`,`german`, 'owo', 'owo']
var ggg = message.content.split(" ")
if(ggg[1] && !lang.includes(ggg[1].toLowerCase())) {
  return message.channel.send({embed : {
    description : `${error} Non posso trovare questa lingua!`,
    color : error_color
  }})
}

if (gg.toLowerCase() === `en` || gg.toLowerCase() === `english`) {
  db.set(`language_${message.guild.id}`, 'en')
  return message.channel.send({embed : {
    description : `:flag_us: - Lingua impostata con successo ad inglese!`,
		color : main_color

  }})
}

if (gg.toLowerCase() === `it` || gg.toLowerCase() === `italian`) {
  db.set(`language_${message.guild.id}`, `it`)
  return message.channel.send({embed : {
    description : `${error} Questa lingua è già stata impostata!`,
		color : error_color
  }})
} 

if (gg.toLowerCase() === `de` || gg.toLowerCase() === `german`) {
  db.set(`language_${message.guild.id}`, `de`)
  return message.channel.send({embed : {
    description : `:flag_de: - Lingua impostata con successo a tedesco!`,
		color : main_color
  }})
} 


if (gg.toLowerCase() === `owo` || gg.toLowerCase() === `owo`) {
  db.set(`language_${message.guild.id}`, `owo`)
  return message.channel.send({embed : {
    description : `(^///^) - Lingua impostata con succeso ad OwO`,
		color : main_color
  }})
} 
}



if(lang === 'de') {
  if(!message.member.hasPermission('MANAGE_GUILD')){
  return message.channel.send({embed : {
    description : `${error} Du hast dafür keine Rechte!`,
    color : error_color
  }})
}

var bo = message.content.slice(prefix.length).trim().split(/ +/);
var gg = bo[1];


if(!gg){
  return message.channel.send({embed : {
   title : `${diskspin} Bitte wählen Sie eine Sprache`,
   color : main_color,
   description : `Verfügbare Sprachen : \n🇺🇸 - English\n🇮🇹 - Italian\n:flag_de: - German`
  }})
}


var lang = [`en`,`english`,`it`,`italian`,`de`,`german`, 'owo', 'owo']
var ggg = message.content.split(" ")
if(ggg[1] && !lang.includes(ggg[1].toLowerCase())) {
  return message.channel.send({embed : {
    description : `${error} Ich kann diese Sprache nicht finden!`,
    color : error_color
  }})
}

if (gg.toLowerCase() === `en` || gg.toLowerCase() === `english`) {
  db.set(`language_${message.guild.id}`, 'en')
  return message.channel.send({embed : {
    description : `:flag_us: - Sprache erfolgreich auf Englisch eingestellt!`,
		color : main_color

  }})
}

if (gg.toLowerCase() === `it` || gg.toLowerCase() === `italian`) {
  db.set(`language_${message.guild.id}`, `it`)
  return message.channel.send({embed : {
    description : `:flag_it: rache erfolgreich auf Italienisch eingestellt!`,
		color : main_color
  }})
} 

if (gg.toLowerCase() === `de` || gg.toLowerCase() === `german`) {
  db.set(`language_${message.guild.id}`, `de`)
  return message.channel.send({embed : {
    description : `${error} Sprache bereits eingestellt!`,
		color : error_color
  }})
}

if (gg.toLowerCase() === `owo` || gg.toLowerCase() === `owo`) {
  db.set(`language_${message.guild.id}`, `owo`)
  return message.channel.send({embed : {
    description : `(^///^) - rache erfolgreich auf OwO eingestellt!`,
		color : main_color
  }})
} 

}



if(lang === 'owo') {
if(!message.member.hasPermission('MANAGE_GUILD')){
  return message.channel.send({embed : {
    description : `${error}Ywou dwon't have enwough permissions`,
    color : error_color
  }})
}

var bo = message.content.slice(prefix.length).trim().split(/ +/);
var gg = bo[1];


if(!gg){
  return message.channel.send({embed : {
   title : `${diskspin} Please chowose a langwuage`,
   color : main_color,
   description : `Awvailable langwuages : \n🇺🇸 - English\n🇮🇹 - Italian\n:flag_de: - German\n(^///^) - OwO (beta)`
  }})
}


var lang = [`en`,`english`,`it`,`italian`,`de`,`german`, 'owo', 'owo']
var ggg = message.content.split(" ")
if(ggg[1] && !lang.includes(ggg[1].toLowerCase())) {
  return message.channel.send({embed : {
    description : `${error} I can't find this langwuage`,
    color : error_color
  }})
}

if (gg.toLowerCase() === `en` || gg.toLowerCase() === `english`) {
  db.set(`language_${message.guild.id}`, 'en')
  return message.channel.send({embed : {
    description : `:flag_us - Langwuage suwccessfully changed to italian`,
		color : error_color

  }})
}

if (gg.toLowerCase() === `it` || gg.toLowerCase() === `italian`) {
  db.set(`language_${message.guild.id}`, `it`)
  return message.channel.send({embed : {
    description : `:flag_it: - Langwuage suwccessfully changed to italian`,
		color : main_color
  }})
} 

if (gg.toLowerCase() === `de` || gg.toLowerCase() === `german`) {
  db.set(`language_${message.guild.id}`, `de`)
  return message.channel.send({embed : {
    description : `:flag_de: - Langwuage swuccessfully changed to german`,
		color : main_color
  }})
} 

if (gg.toLowerCase() === `owo` || gg.toLowerCase() === `owo`) {
  db.set(`language_${message.guild.id}`, `owo`)
  return message.channel.send({embed : {
    description : `(^///^) - This langwuagwe is already setted! -w-`,
		color : main_color
  }})
} 




/*this is the basic
* var lang = await db.get(`language_${message.guild.id}`)
if (!lang) lang = 'en' // add this to all commands in the first 

if (lang === 'en') {
  do the code here
}

if (lang === 'it') {
  do the code here
}

 */
}

  }
}