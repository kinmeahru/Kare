const { emojify } = require('discord-texts')
const { error, error_color } = require('../../config.json')
const db = require('quick.db')
module.exports = {
  name: 'bigtext',
  run: async(client, message, args) => {
    var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    const text = args.join(" ");
    if (!text) return message.lineReplyNoMention({embed : {
      description: `${error} Please enter a text!`,
      color : error_color
    }})
    message.channel.send(emojify(text))
  }
  if(lang === 'it') {
        const text = args.join(" ");
    if (!text) return message.lineReplyNoMention({embed : {
      description: `${error} Perfavore inserisci un testo!`,
      color : error_color
    }})
    message.channel.send(emojify(text))
  }
  if(lang === 'de') {
          const text = args.join(" ");
    if (!text) return message.lineReplyNoMention({embed : {
      description: `${error} Bitte geben Sie einen Text ein!`,
      color : error_color
    }})
    message.channel.send(emojify(text))
  }
}
}