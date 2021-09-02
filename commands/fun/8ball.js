const { MessageEmbed } = require("discord.js")
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = { 
  name: "8ball",
  description: "Ask a Question!",
  category: ["🎆fun"],
  run: async(client, message, args) => {
     var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
    let question = args.join(" ")
    if(!question) return message.reply({embed : {
    description : `${error} Please ask a question!`,
    color : error_color
  }})
    let responses = [
      "Yes.",
      "No.",
      "Never.",
      "Better You Hope.",
      "HAHA! No.",
      "Probably Not.",
      "Probably Yes.",
      "YES!",
      "I Guess Not.",
      "I Guess Yes."

    ]
    const user = message.author;
    let response = responses[Math.floor(Math.random() * responses.length)]
    let embed = new MessageEmbed()
    .setTitle(`🎱**${user.username} Called Upon The Mighty 8Ball!**`)
    .setDescription(`Question - **${question}**\nResponse - **${response}**`)
    message.channel.send(embed)
 
  }
  if(lang === 'it') {

        let question = args.join(" ")
    if(!question) return message.reply({embed : {
    description : `${error} Perfavore fai una domanda!`,
    color : error_color
  }})
    let responses = [
        "Sì.",
        "No.",
        "Mai.",
        "Meglio che speri.",
        "Haha no.",
        "Probabilmente no.",
        "Probabilmente sì.",
        "SÌ!",
        "Non credo.",
        "Penso di si."

    ]
    const user = message.author;
    let response = responses[Math.floor(Math.random() * responses.length)]
    let embed = new MessageEmbed()
    .setTitle(`🎱**${user.username} Ha Invocato La Potente 8Ball!**`)
    .setDescription(`Domanda - **${question}**\nRisposta - **${response}**`)
    message.channel.send(embed)

  }
  if(lang === 'de') {

        let question = args.join(" ")
    if(!question) return message.reply({embed : {
    description : `${error} Bitte stellen Sie eine Frage!`,
    color : error_color
  }})
    let responses = [
        "Jep.",
        "Nein.",
        "Noch nie.",
        "Du hoffst besser.",
        "Haha nein.",
        "Wahrscheinlich nicht.",
        "Wahrscheinlich ja.",
        "JEP!",
        "Glaube ich nicht.",
        "Ich glaube schon."
    ]
    const user = message.author;
    let response = responses[Math.floor(Math.random() * responses.length)]
    let embed = new MessageEmbed()
    .setTitle(`🎱**${user.username} Er beschwor den mächtigen 8Ball!**`)
    .setDescription(`Frage - **${question}**\nAntworten - **${response}**`)
    message.channel.send(embed)

  }
}
}