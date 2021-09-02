const { createCanvas, loadImage } = require('canvas');//
const request = require('node-superfetch');
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
    
        name: "avatarfusion",
        aliases: ["avs"],
        category: "🖼Image",
        description: "",
        usage: "[first mention | first username | first ID | first nickname] <second mention | second username | second ID | second nickname> ",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
            var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {
     
        if (!message.guild.me.hasPermission('ATTACH_FILES')) return message.channel.send({embed : {
    description : `${error} You don't have permission!`,
    color : error_color
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${error} Mention an user to put as base!`,
    color : error_color
  }});
        if (!args[1]) return message.channel.send({embed : {
    description : `${error} Mention an user to put as overlay!`,
    color : error_color
  }});
        let base = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[0].toLocaleLowerCase());
        if (!base) return message.channel.send({embed : {
    description : `${error} Invalid user for the base!`,
    color : error_color
  }});
        let overlay = message.mentions.members.first(2)[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[1].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[1].toLocaleLowerCase());
        if (!overlay) return message.channel.send({embed : {
    description : `${error} Invalid user for the overlay!`,
    color : error_color
  }});
        const baseAvatarURL = base.user.displayAvatarURL({ format: 'png', size: 512 });
        const overlayAvatarURL = overlay.user.displayAvatarURL({ format: 'png', size: 512 });
        try {
            const baseAvatarData = await request.get(baseAvatarURL);
            const baseAvatar = await loadImage(baseAvatarData.body);
            const overlayAvatarData = await request.get(overlayAvatarURL);
            const overlayAvatar = await loadImage(overlayAvatarData.body);
            const canvas = createCanvas(baseAvatar.width, baseAvatar.height);
            const ctx = canvas.getContext('2d');
            ctx.globalAlpha = 0.5;
            ctx.drawImage(baseAvatar, 0, 0);
            ctx.drawImage(overlayAvatar, 0, 0, baseAvatar.width, baseAvatar.height);
            return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'avatarfusion.png' }] });
        } catch (err) {
            return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        };
    }

if(lang === 'it') {


        if (!message.guild.me.hasPermission('ATTACH_FILES')) return message.channel.send({embed : {
    description : `${error} Non hai i permessi per farlo!`,
    color : error_color
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${error} Menziona l'utente da mettere come base!`,
    color : error_color
  }});
        if (!args[1]) return message.channel.send({embed : {
    description : `${error} Menziona l'utente da mettere come overlay!`,
    color : error_color
  }});
        let base = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[0].toLocaleLowerCase());
        if (!base) return message.channel.send({embed : {
    description : `${error} Utente per la base non valido!`,
    color : error_color
  }});
        let overlay = message.mentions.members.first(2)[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[1].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[1].toLocaleLowerCase());
        if (!overlay) return message.channel.send({embed : {
    description : `${error} Utente per l'overlay non valido!`,
    color : error_color
  }});
        const baseAvatarURL = base.user.displayAvatarURL({ format: 'png', size: 512 });
        const overlayAvatarURL = overlay.user.displayAvatarURL({ format: 'png', size: 512 });
        try {
            const baseAvatarData = await request.get(baseAvatarURL);
            const baseAvatar = await loadImage(baseAvatarData.body);
            const overlayAvatarData = await request.get(overlayAvatarURL);
            const overlayAvatar = await loadImage(overlayAvatarData.body);
            const canvas = createCanvas(baseAvatar.width, baseAvatar.height);
            const ctx = canvas.getContext('2d');
            ctx.globalAlpha = 0.5;
            ctx.drawImage(baseAvatar, 0, 0);
            ctx.drawImage(overlayAvatar, 0, 0, baseAvatar.width, baseAvatar.height);
            return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'avatarfusion.png' }] });
        } catch (err) {
            return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        };

}
if(lang === 'de') {


        if (!message.guild.me.hasPermission('ATTACH_FILES')) return message.channel.send({embed : {
    description : `${error} Sie haben keine Berechtigung dazu!`,
    color : error_color
  }});
        if (!args[0]) return message.channel.send({embed : {
    description : `${error} Erwähnen Sie den Benutzer als Basis!`,
    color : error_color
  }});
        if (!args[1]) return message.channel.send({embed : {
    description : `${error} Erwähnen Sie den Benutzer, der als Overlay eingefügt werden soll!`,
    color : error_color
  }});
        let base = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[0].toLocaleLowerCase());
        if (!base) return message.channel.send({embed : {
    description : `${error} Ungültiger Basisbenutzer!`,
    color : error_color
  }});
        let overlay = message.mentions.members.first(2)[1] || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[1].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName === args[1].toLocaleLowerCase());
        if (!overlay) return message.channel.send({embed : {
    description : `${error} Ungültiger Overlay-Benutzer!`,
    color : error_color
  }});
        const baseAvatarURL = base.user.displayAvatarURL({ format: 'png', size: 512 });
        const overlayAvatarURL = overlay.user.displayAvatarURL({ format: 'png', size: 512 });
        try {
            const baseAvatarData = await request.get(baseAvatarURL);
            const baseAvatar = await loadImage(baseAvatarData.body);
            const overlayAvatarData = await request.get(overlayAvatarURL);
            const overlayAvatar = await loadImage(overlayAvatarData.body);
            const canvas = createCanvas(baseAvatar.width, baseAvatar.height);
            const ctx = canvas.getContext('2d');
            ctx.globalAlpha = 0.5;
            ctx.drawImage(baseAvatar, 0, 0);
            ctx.drawImage(overlayAvatar, 0, 0, baseAvatar.width, baseAvatar.height);
            return message.channel.send({ files: [{ attachment: canvas.toBuffer(), name: 'avatarfusion.png' }] });
        } catch (err) {
            return message.channel.send(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
        };

}

    }
};