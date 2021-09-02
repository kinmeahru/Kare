const Canvas = require('canvas');
const { MessageEmbed } = require('discord.js');
const Discord = require(`discord.js`);
const db = require('quick.db')
const canvacord = require("canvacord");
const functions = require("../../functions")
const config = require("../../config.json")
module.exports = {
    name: "affect",
	aliases: ["affect"],
    category: "👻 Fun Commands",
    description: "IMAGE CMD",
    usage: "affect",
    run: async (client, message, args) => {
      var lang = await db.get(`language_${message.guild.id}`)
    if(!lang) lang = 'en'


    if(lang === 'en') {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setAuthor("Loading...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.affect(avatar);
        let attachment = await new Discord.MessageAttachment(image, "affect.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setImage("attachment://affect.png")
        .attachFiles(attachment).setFooter(client.user.username, config.AVATARURL);
        await message.channel.send(fastembed2);
        await tempmsg.delete();//affect
    }
    if(lang === 'it') {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setAuthor("Caricamento...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.affect(avatar);
        let attachment = await new Discord.MessageAttachment(image, "affect.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setImage("attachment://affect.png")
        .attachFiles(attachment).setFooter(client.user.username, config.AVATARURL);
        await message.channel.send(fastembed2);
        await tempmsg.delete();//affect
    }
    if(lang === 'de') {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setAuthor("Wird geladen...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.affect(avatar);
        let attachment = await new Discord.MessageAttachment(image, "affect.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL)
        .setImage("attachment://affect.png")
        .attachFiles(attachment).setFooter(client.user.username, config.AVATARURL);
        await message.channel.send(fastembed2);
        await tempmsg.delete();//affect
    }
}
}