const slotItems = ["🍇", "🍉", "🍌", "🍎", "🍒"];
const db = require("quick.db");
const { MessageEmbed } = require('discord.js');  
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
  
        name:"slots",
        aliases: ["sl"],
        category: "💰economy",
        description: "Slot game | 9x - rare | 3x - common",
        usage: "<amount>",
        accessableby: ""
    ,
    run: async (bot, message, args) => {
                var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
    .setColor(error_color)
    .setDescription(`${error} You are betting more than you have`);

    let moneyhelp = new MessageEmbed()
    .setColor(warning_color)
    .setDescription(`${warning} Specify an amount`); 

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 3
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new MessageEmbed()
            .setDescription(`| ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} |\n\nYou won ${money} coins`)
            .setColor(success_color)
        message.channel.send(slotsEmbed1)
        db.add(`money_${user.id}`, money)
    } else {
        let slotsEmbed = new MessageEmbed()
            .setDescription(`| ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} |\n\nYou lost ${money} coins`)
            .setColor(error_color)
        message.channel.send(slotsEmbed)
        db.subtract(`money_${user.id}`, money)
    }

}

if(lang === 'it') {


    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
    .setColor(error_color)
    .setDescription(`${error} Stai giocando più di quello che hai!`);

    let moneyhelp = new MessageEmbed()
    .setColor(warning_color)
    .setDescription(`${warning} Specifica una quantità!`); 

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 3
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new MessageEmbed()
            .setDescription(`| ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} |\n\nHai vinto ${money} coins`)
            .setColor(success_color)
        message.channel.send(slotsEmbed1)
        db.add(`money_${user.id}`, money)
    } else {
        let slotsEmbed = new MessageEmbed()
            .setDescription(`| ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}| \n\nHai perso ${money} coins`)
            .setColor(error_color)
        message.channel.send(slotsEmbed)
        db.subtract(`money_${user.id}`, money)
    }

}
if(lang === 'de') {


    let user = message.author;
    let moneydb = await db.fetch(`money_${user.id}`)
    let money = parseInt(args[0]);
    let win = false;

    let moneymore = new MessageEmbed()
    .setColor(error_color)
    .setDescription(`${error} Du spielst mehr als du hast!`);

    let moneyhelp = new MessageEmbed()
    .setColor(warning_color)
    .setDescription(`${warning} Geben Sie eine Menge an!`); 

    if (!money) return message.channel.send(moneyhelp);
    if (money > moneydb) return message.channel.send(moneymore);

    let number = []
    for (let i = 0; i < 3; i++) { number[i] = Math.floor(Math.random() * slotItems.length); }

    if (number[0] == number[1] && number[1] == number[2])  { 
        money *= 9
        win = true;
    } else if (number[0] == number[1] || number[0] == number[2] || number[1] == number[2]) { 
        money *= 3
        win = true;
    }
    if (win) {
        let slotsEmbed1 = new MessageEmbed()
            .setDescription(`| ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]} |\n\nDu hast gewonnen ${money} coins`)
            .setColor(success_color)
        message.channel.send(slotsEmbed1)
        db.add(`money_${user.id}`, money)
    } else {
        let slotsEmbed = new MessageEmbed()
            .setDescription(`| ${slotItems[number[0]]} | ${slotItems[number[1]]} | ${slotItems[number[2]]}| \n\nDu hast verloren ${money} coins`)
            .setColor(error_color)
        message.channel.send(slotsEmbed)
        db.subtract(`money_${user.id}`, money)
    }

}

}
}