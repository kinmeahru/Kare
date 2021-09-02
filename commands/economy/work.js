const db = require('quick.db')
const { MessageEmbed } = require('discord.js')
const ms = require("parse-ms");
const Jwork = require('../../JSON/works.json');
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];
const ITwork = require('../../JSON/ITworks.json');
const ITworkR = ITwork[Math.floor(Math.random() * ITwork.length)];
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
   
        name: "work",
        aliases: ["wr"],
        category: "💰economy",
        description: "Work to Earn Money",
        usage: " ",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
         var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english 
if(lang === 'en') {

        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 1800000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You have already worked recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            let embed1 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} ${JworkR} ${amount} coins`)
            message.channel.send(embed1)

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };
    }
    if(lang === 'it'){

      
        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 1800000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Hai già lavorato di recente\n\nProva di nuovo tra ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            let embed1 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} ${ITworkR} ${amount} coins`)
            message.channel.send(embed1)

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };

    }
    if(lang === 'de'){

      
        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 1800000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Du hast schon vor kurzem gearbeitet\n\nVersuche es zwischendurch noch einmal ${time.minutes}m ${time.seconds}s `);
            message.channel.send(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 80) + 1;
            let embed1 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} ${JworkR} ${amount} coins`)
            message.channel.send(embed1)

            db.add(`works_${user.id}`, 1)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };

    }
    }
};
