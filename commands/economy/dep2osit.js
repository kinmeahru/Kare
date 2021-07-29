const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
    
        name: "deposit",
        aliases: ["dep"],
        category: "💰economy",
        description: "Deposits money to bank",
        usage: "<amount>",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
        var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

        let user = message.author;

        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You don't have any money to deposit`)

            if (!money) return message.channel.send(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} You have deposited all your coins into your bank`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor(warning_color)
                .setDescription(`${warning} Specify an amount to deposit`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Your Amount Is Not A Number!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You can't deposit negative money`);

            if (message.content.includes('_')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You don't have that much money`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} You have deposited ${args[0]} coins into your bank`);

            message.channel.send(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }

if(lang === 'it') {
    let user = message.author;

        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non hai soldi da depositare!`)

            if (!money) return message.channel.send(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Hai depositato tutti i tuoi soldi nella banca!`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor(warning_color)
                .setDescription(`${warning} Specifica una cifra da depositare!`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Questa cifra non è valida!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non puoi depositare soldi negativi!`);

            if (message.content.includes('_')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non hai questi soldi!`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Hai depositato ${args[0]} coins nella tua banca!`);

            message.channel.send(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }

    if(lang === 'de') {
    let user = message.author;

        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie haben kein Geld zum Einzahlen!`)

            if (!money) return message.channel.send(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Sie haben Ihr ganzes Geld auf der Bank hinterlegt!`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor(warning_color)
                .setDescription(`${warning} Geben Sie einen Einzahlungsbetrag an!`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Diese Zahl ist nicht gültig!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie können kein negatives Geld einzahlen!`);

            if (message.content.includes('_')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie haben dieses Geld nicht!`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Sie haben hinterlegt ${args[0]} coins bei deiner Bank!`);

            message.channel.send(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }

}

}
