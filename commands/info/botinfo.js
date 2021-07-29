const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
const { main_color, success_color, error_color, warning_color, success, warning, error, staff, butterfly, buff, boost, nitros, cursor, vsc, devb } = require('../../config.json');


module.exports = {

//
  name: "botinfo",

  category: "📰info",
    aliases: ['binfo', 'botstats', 'stats'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Akimi! ${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField(`				**❯ Uptime:**`, `\`\`\`${ms(client.uptime)}\`\`\``, true)
            .addField(`				**❯ Ping:**`, `\`\`\`${client.ws.ping}ms\`\`\``, true)
            .addField(`				**❯ Memory:**`, `\`\`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap\`\`\``, true)
            .addField(`				**❯ Guild Count:**`, `\`\`\`${client.guilds.cache.size} guilds\`\`\``, true)
            .addField(`				**❯ User Count:**`, `\`\`\`${client.users.cache.size} users\`\`\``, true)
            .addField(`				**❯ Commands:**`, `\`\`\`${client.commands.size} cmds\`\`\``,true)
            .addField(`       **❯ Developers:**`, `\`\`\`</Kajirama>#0117\n</Amen>#9898\`\`\``)
            .setTimestamp()
        );
    }
}
