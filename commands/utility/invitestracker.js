const discord = require('discord.js')
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
const db = require('quick.db')
module.exports = {
  name: 'invites',
 run: async(client, message, args) => {
   var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {

    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.fetchInvites();
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv.size <= 0) {
        return message.channel.send({embed : {
          description : `${error}${user.username} don't have any invites`,
          color : error_color
        }})
    }

    let invCodes = userInv.map(x => x.code).join('\n')
    let i = 0;
    userInv.forEach(inv => i += inv.uses)

    const embed = new discord.MessageEmbed()
    .setTitle(`${user.username} Invites`)
    .addField('User Invites', i)
    .addField('Invite Codes', invCodes)
    .setColor(main_color)
    .setTimestamp()
    message.channel.send(embed)
}

if(lang === 'it') {
    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.fetchInvites();
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv.size <= 0) {
        return message.channel.send({embed : {
          description : `${error}${user.username} Non ha nessun invito`,
          color : error_color
        }})
    }

    let invCodes = userInv.map(x => x.code).join('\n')
    let i = 0;
    userInv.forEach(inv => i += inv.uses)

    const embed = new discord.MessageEmbed()
    .setTitle(`Inviti di ${user.username}`)
    .addField('Inviti utenti', i)
    .addField('Codici invito', invCodes)
    .setColor(main_color)
    .setTimestamp()
    message.channel.send(embed)
}

if(lang === 'de') {

    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.fetchInvites();
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv.size <= 0) {
        return message.channel.send({embed : {
          description : `${error}${user.username} hat keine Einladungen`,
          color : error_color
        }})
    }

    let invCodes = userInv.map(x => x.code).join('\n')
    let i = 0;
    userInv.forEach(inv => i += inv.uses)

    const embed = new discord.MessageEmbed()
    .setTitle(`Einladungen von ${user.username}`)
    .addField('Benutzereinladungen', i)
    .addField('Einladungscodes', invCodes)
    .setColor(main_color)
    .setTimestamp()
    message.channel.send(embed)
}

if(lang === 'owo') {

    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.fetchInvites();
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv.size <= 0) {
        return message.channel.send({embed : {
          description : `${error}${user.username} don't have any invites`,
          color : error_color
        }})
    }

    let invCodes = userInv.map(x => x.code).join('\n')
    let i = 0;
    userInv.forEach(inv => i += inv.uses)

    const embed = new discord.MessageEmbed()
    .setTitle(`${user.username} Invites`)
    .addField('User Invites', i)
    .addField('Invite Codes', invCodes)
    .setColor(main_color)
    .setTimestamp()
    message.channel.send(embed)
}


if(lang === 'owo') {

    let user = message.mentions.users.first() || message.author
    let invites = await message.guild.fetchInvites();
    let userInv = invites.filter(u => u.inviter && u.inviter.id === user.id)

    if(userInv.size <= 0) {
        return message.channel.send({embed : {
          description : `${error}${user.username} dowon't have any invites`,
          color : error_color
        }})
    }

    let invCodes = userInv.map(x => x.code).join('\n')
    let i = 0;
    userInv.forEach(inv => i += inv.uses)

    const embed = new discord.MessageEmbed()
    .setTitle(`${user.username} Invites`)
    .addField('UwUser Invitewes', i)
    .addField('Invitewe Cowodes', invCodes)
    .setColor(main_color)
    .setTimestamp()
    message.channel.send(embed)
}

}
}
