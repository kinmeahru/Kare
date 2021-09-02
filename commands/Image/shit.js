const Canvas = require('canvas');
const { MessageEmbed } = require('discord.js');
const Discord = require(`discord.js`);
const config = require("../../config.json")
const canvacord = require("canvacord");
const path = require("path");
module.exports = {

    name: path.parse(__filename).name,
    category: "👻 Fun Commands",
    useage: `${path.parse(__filename).name} [@User]`,
  description: "*Image cmd in the style:* " + path.parse(__filename).name ,
    run: async (client, message, args) => {
       var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setAuthor("Loading...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.shit(avatar);
        let attachment = await new Discord.MessageAttachment(image, "shit.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setFooter(client.user.username, config.AVATARURL)
        .setImage("attachment://shit.png")
        .attachFiles(attachment)
        await message.channel.send(fastembed2);
        await tempmsg.delete();
    }
    if(lang === 'it') {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setAuthor("Caricamento...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.shit(avatar);
        let attachment = await new Discord.MessageAttachment(image, "shit.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setFooter(client.user.username, config.AVATARURL)
        .setImage("attachment://shit.png")
        .attachFiles(attachment)
        await message.channel.send(fastembed2);
        await tempmsg.delete();
    }
    if(lang === 'de') {
        let tempmsg = await message.channel.send(new MessageEmbed().setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setAuthor("Wird geladen...", "https://cdn.discordapp.com/emojis/769935094285860894.gif"))
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ dynamic: false, format: 'png' });
        let image = await canvacord.Canvas.shit(avatar);
        let attachment = await new Discord.MessageAttachment(image, "shit.png");
        let fastembed2 = new Discord.MessageEmbed()
        .setColor(config.colors.yes).setFooter(client.user.username, config.AVATARURL).setFooter(client.user.username, config.AVATARURL)
        .setImage("attachment://shit.png")
        .attachFiles(attachment)
        await message.channel.send(fastembed2);
        await tempmsg.delete();
    }
}
}