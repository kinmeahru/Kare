const { MessageEmbed } = require("discord.js");
const db = require("quick.db");//

module.exports = {
  name: "warn",
  category: "🛠moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        ":x: | **You Don't Have  Enough Permission To Use This Command!**"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        ":x: | **Please Mention the user to who you want to warn**"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send(":x: | **You can not warn bots**");
    }

    if (message.author.id === user.id) {
      return message.channel.send(":x: | **You can not warn yourself**");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        ":x: | **You jerk, how you can warn server owner -_-'**"
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        ":x: | **Please provide reason to warn**"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
      await message.channel.send(
        `You warned **${
          message.mentions.users.first().username
        }** for ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`);
      
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`);
      
      message.delete
      
    }
  }
};
