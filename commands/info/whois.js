const Discord = require("discord.js"), moment = require("moment"); //npm i discord.js moment
//
const Color = "RANDOM";


module.exports = {
  name: "userinfo",
  aliases: ["uinfo", "whois"],
  category: "📰info",
  description: "Show Member Information!",
  usage: "Userinfo | <user>",
  run: async (client, message, args) => {

    const User = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Dism = User.user.discriminator, Bot = User.user.bot ? "Yes" : "No";
    const Roles = (User.roles.cache.size - 1) == 0 ? "None" : User.roles.cache.size - 1, Avatar = User.user.avatarURL({ dynamic: true });
    const Badges = await (await User.user.fetchFlags(true)).toArray().map(F => F[0] + (F.slice(1).toLowerCase().replace(/_/g, " "))).join(", "), Permissions = await User.permissions.toArray().map(P => (P[0] + P.slice(1).toLowerCase()).replace(/_/g, " ")).sort().join(", ");
const highrole = "coap"
const Status = User.presence.status.charAt(0).toUpperCase() + User.presence.status.slice(1);
    const Created = await Format(User.user.createdTimestamp), Joined = await Format(User.joinedTimestamp);
    const Place = User.user.presence.clientStatus ? Object.keys(User.user.presence.clientStatus).map(E => E.charAt(0).toUpperCase() + E.slice(1)) : [], Activity = User.presence.activities ? await Activities(User.presence.activities) : [];

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setAuthor(message.guild.ownerID == User.user.id ? "Owner" : "User", Avatar)
    .setDescription(`**__General__**\n\`Username:\` ${User.user.username}${User.nickname ? ` (${User.nickname})` : ""}\n\`Discriminator:\` ${Dism}\n\`ID:\` ${User.id}\n\`Bot\` ${Bot}\n**__Member__**\n\`Highest Role:\` ${highrole}\n\`Manageable:\` ${User.manageable ? "Yes" : "No"}\n\`Roles:\` ${Roles}\n\`Created:\` ${Created}\n\`Joined:\` ${Joined}\n**__Presence__**\n\`Status:\` ${Status}\n\`Using Discord On:\`${Place ? Place.join("\n") == "" ? "Unknown" : Place.join("\n") : "None"}\n${Activity.length > 1 ? "\`Activities\`" : "\`Activity\`"} -\n${Activity ? Activity.join("\n") == "" ? "None" : Activity.join("\n") : "None"}\n\n**__Other__**\n\`Badges:\` \n${Badges ? Badges : "None"}\n\`Permissions:\` \n${Permissions ? Permissions : "None"}`)
    .setFooter(`Requested By ${message.author.username}`)
    .setTimestamp()
    .setThumbnail(User.user.displayAvatarURL({dynamic: true}))

    return message.channel.send(Embed);

    async function Activities(Arr) {
      const Types = {
        PLAYING: "Playing",
        STREAMING: "Streaming",
        LISTENING: "Listening",
        WATCHING: "Watching",
        CUSTOM_STATUS: "Custom Status",
        COMPETING: "Competing"
      };

      Arr = Arr.map(E => Types[E.type] + `: ${E.type == "CUSTOM_STATUS" ? `${E.emoji ? E.emoji.name + " " : ""}${E.state}` : E.name}`);
      return Arr;
    };

    async function Format(Stamp) {
       return `${String(moment(Stamp).format("LL")).replace(",", "")} ${moment(Stamp).format("LT")} (${moment(Stamp).fromNow()})`
    };
  }
};