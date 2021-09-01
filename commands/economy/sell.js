const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const { default_prefix } = require('../../config')
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
   
        name: "sell",
        noalias: [""],
        category: "💰economy",
        description: "Sell to somebody",
        usage: "[mention | ID] <amount>",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
            var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            fetched = prefix
        } else {
            prefix = fetched
        }
        let user = message.author;

        if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let embed1 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You don't have Nikes to sell`);

            let nikees = await db.fetch(`nikes_${user.id}`)

            if (nikees < 1) return message.channel.send(embed1)

            db.fetch(`nikes_${user.id}`)
            db.subtract(`nikes_${user.id}`, 1)

            let embed2 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Sold Fresh Nikes For 600 Coins`);

            db.add(`money_${user.id}`, 600)
            message.channel.send(embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You don't have a Car to sell`);

            let cars = await db.fetch(`car_${user.id}`)

            if (cars < 1) return message.channel.send(embed3)

            db.fetch(`car_${user.id}`)
            db.subtract(`car_${user.id}`, 1)

            let embed4= new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Sold a Car For 800 Coins`);

            db.add(`money_${user.id}`, 800)
            message.channel.send(embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let sembed2 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You don't have a Mansion to sell`);

            let houses = await db.fetch(`house_${user.id}`)

            if (houses < 1) return message.channel.send(sembed2)

            db.fetch(`house_${user.id}`)
            db.subtract(`house_${user.id}`, 1)

            let sembed3 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Sold a Mansion For 1200 Coins`);

            db.add(`money_${user.id}`, 1200)
            message.channel.send(sembed3)
        } else {
            if (message.content.toLowerCase() === `${prefix}sell`) {
                let embed9 = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} Enter an item to sell. Type ${prefix}store to see list of items`)
                return message.channel.send(embed9)
            } else {
              return message.channel.send({embed : {
    description : `${error}Not a valid item`,
    color : error_color
  }})
            }
        }
    }
    
if(lang === 'it') {
  let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            fetched = prefix
        } else {
            prefix = fetched
        }
        let user = message.author;

        if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let embed1 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non hai nike da vendere!`);

            let nikees = await db.fetch(`nikes_${user.id}`)

            if (nikees < 1) return message.channel.send(embed1)

            db.fetch(`nikes_${user.id}`)
            db.subtract(`nikes_${user.id}`, 1)

            let embed2 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Vendute delle Nike 600 Coins`);

            db.add(`money_${user.id}`, 600)
            message.channel.send(embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non hai una macchina da vendere`);

            let cars = await db.fetch(`car_${user.id}`)

            if (cars < 1) return message.channel.send(embed3)

            db.fetch(`car_${user.id}`)
            db.subtract(`car_${user.id}`, 1)

            let embed4= new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Venduta una macchina 800 Coins`);

            db.add(`money_${user.id}`, 800)
            message.channel.send(embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let sembed2 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Non hai una dimora da vendere`);

            let houses = await db.fetch(`house_${user.id}`)

            if (houses < 1) return message.channel.send(sembed2)

            db.fetch(`house_${user.id}`)
            db.subtract(`house_${user.id}`, 1)

            let sembed3 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Venduta una dimora per 1200 Coins`);

            db.add(`money_${user.id}`, 1200)
            message.channel.send(sembed3)
        } else {
            if (message.content.toLowerCase() === `${prefix}sell`) {
                let embed9 = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} Inserisci un oggetto da vendere. Digita ${prefix}store per vedere la lista degli oggetti`)
                return message.channel.send(embed9)
            } else {
              return message.channel.send({embed : {
    description : `${error}Non è un item valido`,
    color : error_color 
  }})
            }
        }

}


if(lang === 'de') {
  let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            fetched = prefix
        } else {
            prefix = fetched
        }
        let user = message.author;

        if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let embed1 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie haben keinen Nike zu verkaufen!`);

            let nikees = await db.fetch(`nikes_${user.id}`)

            if (nikees < 1) return message.channel.send(embed1)

            db.fetch(`nikes_${user.id}`)
            db.subtract(`nikes_${user.id}`, 1)

            let embed2 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Einige Nike 600 Münzen verkauft`);

            db.add(`money_${user.id}`, 600)
            message.channel.send(embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie haben kein Auto zu verkaufen`);

            let cars = await db.fetch(`car_${user.id}`)

            if (cars < 1) return message.channel.send(embed3)

            db.fetch(`car_${user.id}`)
            db.subtract(`car_${user.id}`, 1)

            let embed4= new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Verkaufe einen 800-Münzen-Automaten`);

            db.add(`money_${user.id}`, 800)
            message.channel.send(embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let sembed2 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie haben kein Haus zu verkaufen`);

            let houses = await db.fetch(`house_${user.id}`)

            if (houses < 1) return message.channel.send(sembed2)

            db.fetch(`house_${user.id}`)
            db.subtract(`house_${user.id}`, 1)

            let sembed3 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Ein Herrenhaus, das für 1200 Münzen verkauft wurde`);

            db.add(`money_${user.id}`, 1200)
            message.channel.send(sembed3)
        } else {
            if (message.content.toLowerCase() === `${prefix}sell`) {
                let embed9 = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} Geben Sie einen Artikel ein, der verkauft werden soll. Art ${prefix}store um die Liste der Objekte zu sehen`)
                return message.channel.send(embed9)
            } else {
              return message.channel.send({embed : {
    description : `${error}Es ist kein gültiger Artikel`,
    color : error_color 
  }})
            }
        }

}
}
}
