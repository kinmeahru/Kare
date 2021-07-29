const { hangman } = require('reconlx')
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');


module.exports = {
    name : 'hangman',
    category: ["🕹Games"],
    aliases: ["hm"],
    run : async(client, message, args) => {
       var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
       
       let number = ["0", '1', '2', '3', '4', '5', '6', '7', '8', '9'];
       if(message.content.includes(number)) return message.channel.send({embed : {
    description : `${error} You cannot enter numbers!`,
    color : error_color
  }})
        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send({embed : {
    description : `${error} Please specify a channel!`,
    color : error_color
  }})
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send({embed : {
    description : `${error} Please specify a word to guess!`,
    color : error_color
  }})
        message.delete();
        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();

        
    }

    if(lang === 'it') {

           const number = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
       if(message.content(number)) return message.channel.send({embed : {
    description : `${error} Non puoi inserire numeri!`,
    color : error_color
  }})

             const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send({embed : {
    description : `${error} Perfavore specifica un canale!`,
    color : error_color
  }})
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send({embed : {
    description : `${error} Perfavore specifica una parola!`,
    color : error_color
  }})
        message.delete();
        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();

    }
    if(lang === 'de') {
                const number = ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
       if(message.content(number)) return message.channel.send({embed : {
    description : `${error} Sie können keine Zahlen eingeben!`,
    color : error_color
  }})

             const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send({embed : {
    description : `${error} Perfavore specifica un canale!`,
    color : error_color
  }})
        const word = args.slice(1).join(" ")
        if(!word) return  message.channel.send({embed : {
    description : `${error} Bitte geben Sie ein Wort ein!`,
    color : error_color
  }})
        message.delete();
        const hang = new hangman({
            message: message,
            word: word,
            client: client,
            channelID: channel.id,
        })

        hang.start();
    }
    }
} 

