const { MessageEmbed } = require("discord.js");
const { prefix } = require('../../config.json')
const db = require("quick.db");
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
    
        name: "withdraw",
        aliases: ["wd"],
        category: "💰economy",
        description: "Withdraws Money From Bank",
        usage: "<amount>",
    
    run: async (bot, message, args) => {
       var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)
            let embed = new MessageEmbed()
              .setColor(error_color)
              .setDescription(`${error} You Do Not Have Any Money To Withdraw!`)
            if (!money) return message.channel.send(embed)
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)
            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} You have withdrawn all your coins from your bank`); 
            message.channel.send(embed5)

        } else {

            let embed2 = new MessageEmbed() 
                .setColor(warning_color)
                .setDescription(`${warning} Specify an amount to withdraw!`);

            if (!args[0]) {
                return message.channel.send(embed2)
            }
            let embed6 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Your Amount Is Not A Number!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            }
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You can't withdraw negative money!`);

            if (message.content.includes('_')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You don't have that much money in the bank!`);

            if (member2 < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} You have withdrawn ${args[0]} coins from your bank!`);

            message.channel.send(embed5)
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }
    }

    if(lang === 'it') {

        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)
            let embed = new MessageEmbed()
              .setColor(error_color)
              .setDescription(`${error} Non hai soldi da ritirare!`)
            if (!money) return message.channel.send(embed)
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)
            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Hai ritirato tutti i tuoi coins dalla banca!`); 
            message.channel.send(embed5)

        } else {

            let embed2 = new MessageEmbed() 
                .setColor(warning_color)
                .setDescription(`${warning} Specifica una quantità da ritirare!`);

            if (!args[0]) {
                return message.channel.send(embed2)
            }
            let embed6 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Questa quantità non è un numero!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            }
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non puoi ritirare soldi negativi!`);

            if (message.content.includes('_')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non hai tutti questi soldi nella banca!`);

            if (member2 < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Hai ritirato ${args[0]} coins dalla tua banca!`);

            message.channel.send(embed5)
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }

    }
    if(lang === 'de') {

        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)
            let embed = new MessageEmbed()
              .setColor(error_color)
              .setDescription(`${error} Sie haben kein Geld zum Abheben!`)
            if (!money) return message.channel.send(embed)
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)
            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Sie haben alle Ihre Coins von der Bank abgehoben!`); 
            message.channel.send(embed5)

        } else {

            let embed2 = new MessageEmbed() 
                .setColor(warning_color)
                .setDescription(`${warning} Geben Sie eine zu sammelnde Menge an!`);

            if (!args[0]) {
                return message.channel.send(embed2)
            }
            let embed6 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Diese Menge ist keine Zahl!`)

            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            }
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie können kein negatives Geld abheben!`);

            if (message.content.includes('_')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie haben das ganze Geld nicht auf der Bank!`);

            if (member2 < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success}Sie haben sich zurückgezogen ${args[0]} coins von deiner Bank!`);

            message.channel.send(embed5)
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }

    }
}
}
