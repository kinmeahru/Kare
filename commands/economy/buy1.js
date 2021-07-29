const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
const { default_prefix } = require('../../config');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
    
        name: "buy",
        noalias: [""],
        category: "💰economy",
        description: "buys items",
        usage: "[item]",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
       var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

        let user = message.author;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = default_prefix
        } else {
            prefix = fetched
        }
      
        let author = db.fetch(`money_${user.id}`)


        let Embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} You need 200 coins to purchase Bronze VIP`);



        if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            if (author < 200) return message.channel.send(Embed)

            await db.fetch(`bronze_${user.id}`);
            db.set(`bronze_${user.id}`, true)

            let Embed2 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Purchased Bronze VIP For 200 Coins`);

            db.subtract(`money_${user.id}`, 200)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let Embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You need 600 coins to purchase some Nikes`);

            if (author < 600) return message.channel.send(Embed3)

            await db.fetch(`nikes_${user.id}`)
            db.add(`nikes_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Purchased Fresh Nikes For 600 Coins`);

            db.subtract(`money_${user.id}`, 600)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let Embed5 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You need 800 coins to purchase a new car`);

            if (author < 800) return message.channel.send(Embed5)

            await db.fetch(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Purchased A New Car For 800 Coins`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 800)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let Embed7 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} You need 1200 coins to purchase a Mansion`);

            if (author < 1200) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Purchased A Mansion For 1200 Coins`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} Enter An Item To Buy!\nType ${prefix}shop To See List Of Items!`)
                return message.channel.send(embed9)
            }
        }
    }
    if(lang === 'it') {


       let user = message.author;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = default_prefix
        } else {
            prefix = fetched
        }
      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Hai bisogno di 200 coins per acquistare il VIP Bronzo!`);


        if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            if (author < 200) return message.channel.send(Embed)

            await db.fetch(`bronze_${user.id}`);
            db.set(`bronze_${user.id}`, true)

            let Embed2 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Acquistato il VIP Bronzo per 200 coins!`);

            db.subtract(`money_${user.id}`, 200)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let Embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Hai bisogno di 600 coins per acquistare delle Nike!`);

            if (author < 600) return message.channel.send(Embed3)

            await db.fetch(`nikes_${user.id}`)
            db.add(`nikes_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Acquistate delle Nike nuove di zecca per 600 coins!`);

            db.subtract(`money_${user.id}`, 600)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let Embed5 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Hai bisogno di 800 coins per acquistare una nuova auto!`);

            if (author < 800) return message.channel.send(Embed5)

            await db.fetch(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Acquistata una nuova auto per 800 coins!`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 800)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let Embed7 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Hai bisogno di 1200 coins per acquistare una nuova dimora!`);

            if (author < 1200) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Acquistata una nuova dimora per 1200 coins!`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} Inserisci un oggetto da acquistare!\nDigita ${prefix}shop per vedere la lista degli oggetti!`)
                return message.channel.send(embed9)
            }
        }
    }

    if(lang === 'de') {


       let user = message.author;

        let prefix;
        let fetched = await db.fetch(`prefix_${message.guild.id}`);

        if (fetched === null) {
            prefix = default_prefix
        } else {
            prefix = fetched
        }
      
        let author = db.fetch(`money_${user.id}`)

        let Embed = new MessageEmbed()
            .setColor(error_color)
            .setDescription(`${error} Sie benötigen 200 Münzen, um den Bronze-VIP zu kaufen!`);


        if (args.join(' ').toLocaleLowerCase() == 'bronze') {
            if (author < 200) return message.channel.send(Embed)

            await db.fetch(`bronze_${user.id}`);
            db.set(`bronze_${user.id}`, true)

            let Embed2 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Habe den Bronze-VIP für 200 Münzen gekauft!`);

            db.subtract(`money_${user.id}`, 200)
            message.channel.send(Embed2)
        } else if (args.join(' ').toLocaleLowerCase() == 'nikes') {
            let Embed3 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Du brauchst 600 Münzen, um Nikes zu kaufen!`);

            if (author < 600) return message.channel.send(Embed3)

            await db.fetch(`nikes_${user.id}`)
            db.add(`nikes_${user.id}`, 1)

            let Embed4 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Kaufe brandneue Nikes für 600 Münzen!`);

            db.subtract(`money_${user.id}`, 600)
            message.channel.send(Embed4)
        } else if (args.join(' ').toLocaleLowerCase() == 'car') {
            let Embed5 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie benötigen 800 Münzen, um ein neues Auto zu kaufen!`);

            if (author < 800) return message.channel.send(Embed5)

            await db.fetch(`car_${user.id}`)
            db.add(`car_${user.id}`, 1)

            let Embed6 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} kaufte ein neues Auto für 800 Münzen!`);

            db.subtract(`money_${message.guild.id}_${user.id}`, 800)
            message.channel.send(Embed6)
        } else if (args.join(' ').toLocaleLowerCase() == 'mansion') {
            let Embed7 = new MessageEmbed()
                .setColor(error_color)
                .setDescription(`${error} Sie benötigen 1200 Münzen, um ein neues Zuhause zu kaufen!`);

            if (author < 1200) return message.channel.send(Embed7)

            await db.fetch(`house_${user.id}`)
            db.add(`house_${user.id}`, 1)

            let Embed8 = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`${success} Habe eine neue Villa für 1200 Münzen gekauft!`);

            db.subtract(`money_${user.id}`, 1200)
            message.channel.send(Embed8)
        } else {
            if (message.content.toLowerCase() === `${prefix}buy`) {
                let embed9 = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} Fügen Sie einen Artikel ein, um ihn zu kaufen!\nArt ${prefix}shop um die Liste der Objekte zu sehen!`)
                return message.channel.send(embed9)
            }
        }
    }

    }
    }
