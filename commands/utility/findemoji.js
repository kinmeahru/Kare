const discord = require('discord.js')//
const fetch = require("node-fetch")
 const db = require('quick.db')
 const { error, error_color } = require('../../config.json')
module.exports = {
    name: "findemoji",
    aliases: ["finde", "fe"],
    category: "🛠moderation",
    description: "Steals Emoji from Other Servers to ur Server.",
    authorPermission: ["MANAGE_EMOJIS"],
 
    run: async (client, message, args) => {
	var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    
      if (!message.member.hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send({embed : {
              description : `${error} You don't have enough permissions`,
              color: error_color
              }})
        }
let emojis = await fetch("https://emoji.gg/api/").then(res => res.json());
     const q = args.join(" ").toLowerCase().trim().split(" ").join("_");
     let matches = emojis.filter(s => s.title == q || s.title.includes(q));
     
     let noResult = new discord.MessageEmbed()
        .setDescription(`${error} No Results found for ${args.join(" ")}!`)
        .setColor(error_color)
     
     if (!matches.length) return message.channel.send(noResult)
     let page = 0;
     let embed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     const msg = await message.channel.send(embed);
     emojis = ["◀️", "▶️", "✅", "❌"];
     msg.react(emojis[0]);
     msg.react(emojis[1]);
     msg.react(emojis[2]);
     msg.react(emojis[3]);
     const filter = (r, u) => emojis.includes(r.emoji.name.trim()) && u.id == message.author.id;
     let doing = true;
     while (doing) {
     let reaction;
     try { reaction = await msg.awaitReactions(filter, { max: 1, time: 120000, errors: ["time"] })}
     catch { message.channel.send(message.author.toString() + ", You took too long."); msg.reactions.removeAll() ; doing = false; return; };
     reaction = reaction.first();
     const rmsg = reaction.message;
     if (reaction.emoji.name == emojis[0]) {
     page--;
     if (!matches[page]) {
     page++;
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     } else {
     let newembed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     msg.edit(newembed);
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     }
     } else if (reaction.emoji.name == emojis[1]) {
     page++;
     if (!matches[page]) {
     page--;
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     } else {
     let newembed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     msg.edit(newembed);
rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     }
     } else if (reaction.emoji.name == emojis[2]) {
      const res = matches[page];
      let created;
      message.channel.startTyping();
      try { 
        created = await message.guild.emojis.create(res.image, res.title);
        message.channel.stopTyping();
       } catch {
        message.channel.stopTyping();
        message.channel.send(`Unable to add ${res.title}.`);
        rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
        doing = false;
        break;
       }
       message.channel.send(`Successfully added ${created}!`);
      rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
       doing = false;
       break;
 
     } else if (reaction.emoji.name == emojis[3]) {
       message.channel.send("Cancelled command.");
       msg.reactions.removeAll();
       return;
     }};
     
    }
    if(lang === 'it') {


      
      if (!message.member.hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send({embed : {
              description : `${error} Non hai i permessi per farlo!`,
              color: error_color
              }})
        }
let emojis = await fetch("https://emoji.gg/api/").then(res => res.json());
     const q = args.join(" ").toLowerCase().trim().split(" ").join("_");
     let matches = emojis.filter(s => s.title == q || s.title.includes(q));
     
     let noResult = new discord.MessageEmbed()
        .setDescription(`${error} Nessun risultato per ${args.join(" ")}!`)
        .setColor(error_color)
     
     if (!matches.length) return message.channel.send(noResult)
     let page = 0;
     let embed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     const msg = await message.channel.send(embed);
     emojis = ["◀️", "▶️", "✅", "❌"];
     msg.react(emojis[0]);
     msg.react(emojis[1]);
     msg.react(emojis[2]);
     msg.react(emojis[3]);
     const filter = (r, u) => emojis.includes(r.emoji.name.trim()) && u.id == message.author.id;
     let doing = true;
     while (doing) {
     let reaction;
     try { reaction = await msg.awaitReactions(filter, { max: 1, time: 120000, errors: ["time"] })}
     catch { message.channel.send(message.author.toString() + ", Ci hai messo troppo tempo."); msg.reactions.removeAll() ; doing = false; return; };
     reaction = reaction.first();
     const rmsg = reaction.message;
     if (reaction.emoji.name == emojis[0]) {
     page--;
     if (!matches[page]) {
     page++;
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     } else {
     let newembed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     msg.edit(newembed);
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     }
     } else if (reaction.emoji.name == emojis[1]) {
     page++;
     if (!matches[page]) {
     page--;
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     } else {
     let newembed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     msg.edit(newembed);
rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     }
     } else if (reaction.emoji.name == emojis[2]) {
      const res = matches[page];
      let created;
      message.channel.startTyping();
      try { 
        created = await message.guild.emojis.create(res.image, res.title);
        message.channel.stopTyping();
       } catch {
        message.channel.stopTyping();
        message.channel.send(`Impossibile aggiungere ${res.title}.`);
        rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
        doing = false;
        break;
       }
       message.channel.send(`Aggiunto con successo ${created}!`);
      rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
       doing = false;
       break;
 
     } else if (reaction.emoji.name == emojis[3]) {
       message.channel.send("Comando cancellato");
       msg.reactions.removeAll();
       return;
     }};

    }


if(lang === 'owo') {
    
      if (!message.member.hasPermission("MANAGE_EMOJIS")) {
            return message.channel.send({embed : {
              description : `${error} Yowou down't hawve enowough pewmissiows`,
              color: error_color
              }})
        }
let emojis = await fetch("https://emoji.gg/api/").then(res => res.json());
     const q = args.join(" ").toLowerCase().trim().split(" ").join("_");
     let matches = emojis.filter(s => s.title == q || s.title.includes(q));
     
     let noResult = new discord.MessageEmbed()
        .setDescription(`${error} No Resuwlts fouwnd fowor ${args.join(" ")}!`)
        .setColor(error_color)
     
     if (!matches.length) return message.channel.send(noResult)
     let page = 0;
     let embed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     const msg = await message.channel.send(embed);
     emojis = ["◀️", "▶️", "✅", "❌"];
     msg.react(emojis[0]);
     msg.react(emojis[1]);
     msg.react(emojis[2]);
     msg.react(emojis[3]);
     const filter = (r, u) => emojis.includes(r.emoji.name.trim()) && u.id == message.author.id;
     let doing = true;
     while (doing) {
     let reaction;
     try { reaction = await msg.awaitReactions(filter, { max: 1, time: 120000, errors: ["time"] })}
     catch { message.channel.send(message.author.toString() + ", You took too long."); msg.reactions.removeAll() ; doing = false; return; };
     reaction = reaction.first();
     const rmsg = reaction.message;
     if (reaction.emoji.name == emojis[0]) {
     page--;
     if (!matches[page]) {
     page++;
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     } else {
     let newembed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     msg.edit(newembed);
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     }
     } else if (reaction.emoji.name == emojis[1]) {
     page++;
     if (!matches[page]) {
     page--;
     rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     } else {
     let newembed = new discord.MessageEmbed()
     .setTitle(matches[page].title)
     .setURL("https://discordemoji.com/emoji/" + matches[page].slug)
     .setColor("#dc5586")
     .setImage(matches[page].image)
     .setFooter(`Emoji ${page + 1}/${matches.length}`);
     msg.edit(newembed);
rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
     }
     } else if (reaction.emoji.name == emojis[2]) {
      const res = matches[page];
      let created;
      message.channel.startTyping();
      try { 
        created = await message.guild.emojis.create(res.image, res.title);
        message.channel.stopTyping();
       } catch {
        message.channel.stopTyping();
        message.channel.send(`UwUnable to add ${res.title}.`);
        rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
        doing = false;
        break;
       }
       message.channel.send(`Successfuwly addwed ${created}!`);
      rmsg.reactions.resolve(reaction.emoji.name).users.remove(message.author.id).catch(err => {})
       doing = false;
       break;
 
     } else if (reaction.emoji.name == emojis[3]) {
       message.channel.send("Cancelled command.");
       msg.reactions.removeAll();
       return;
     }};
     
    }

}
}