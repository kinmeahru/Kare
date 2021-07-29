const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { chunk } = require('../../functions');

module.exports = {
    
        name: "setinfo",
        aliases: ['setbio'],
        description: "Set Profile Description",
        category: '💰economy',
        usage: '[info]',
        accessableby: 'everyone'
    ,
    run: async (bot, message, args) => {
             var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        let user = message.author;
        if (!args[0]) {
            let fetchInfo = await db.fetch(`info_${user.id}`)
            if (fetchInfo) {
                let embed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor('Info Is Already Set', message.author.displayAvatarURL())
                    .setDescription(`**${fetchInfo}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                return message.channel.send(embed)
            }
        }
        let newInfo = args.join(' ');
        if (!newInfo) return message.channel.send({embed : {
    description : `Please enter your info!`,
    color : `RED`  
  }});
        if (newInfo.length > 165) return message.channel.send({embed : {
    description : `Max\`165\`characters!`,
    color : `RED`  
  }});
        let newsInfo = chunk(newInfo, 42).join('\n');
        db.set(`info_${user.id}`, newsInfo);

        let notesEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`Your info box is now setted`, message.author.displayAvatarURL())
            .setDescription(newsInfo)
            .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send(notesEmbed);
    }
    if(lang === 'it') {
      let user = message.author;
        if (!args[0]) {
            let fetchInfo = await db.fetch(`info_${user.id}`)
            if (fetchInfo) {
                let embed = new MessageEmbed()
                    .setColor("GREEN")
                    .setAuthor('Le impostazioni sono già impostate', message.author.displayAvatarURL())
                    .setDescription(`**${fetchInfo}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                return message.channel.send(embed)
            }
        }
        let newInfo = args.join(' ');
        if (!newInfo) return message.channel.send({embed : {
    description : `Perfavore inserisci le tue info`,
    color : `RED`  
  }});
        if (newInfo.length > 165) return message.channel.send({embed : {
    description : `Massimo\`165\`caratteri `,
    color : `RED`  
  }});
        let newsInfo = chunk(newInfo, 42).join('\n');
        db.set(`info_${user.id}`, newsInfo);

        let notesEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setAuthor(`La tua info box è stata impostata`, message.author.displayAvatarURL())
            .setDescription(newsInfo)
            .setFooter(message.guild.name, message.guild.iconURL())
        message.channel.send(notesEmbed);
    }
    }
};