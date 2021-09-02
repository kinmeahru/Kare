const { Client, Message, MessageEmbed  } = require('discord.js');

//
module.exports = {
name: 'bug',
category: ['📰info'],
/** 
* @param {Client} client
* @param {Message} message 
* @param {String[]} args 
*/

run: async(client, message, args) => {
const owner = client.users.cache.get('your user id');

const query = args.join(" ");
if(!query) return message.reply('Please Provide Something To Report');

const reportEmbed = new MessageEmbed()
.setTitle('New Bug!')
.addField('Author', message.author.toString(), true)
.addField('Guild', message.guild.name, true)
.addField('Report', query)
.setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
.setTimestamp();

owner.send(reportEmbed);


   }
 }  
