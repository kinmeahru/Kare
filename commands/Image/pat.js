const { main_color } = require('../../config.json')
const Color = main_color, Random = require("srod-v2");//
const Discord = require("discord.js");

module.exports = {
  name: "patt",
  aliases: [],
  category: "🖼Image",
  description: "Return A Random Pat!",
  usage: "Pat",
  run: async (client, message, args) => {

    const Data = await Random.GetAnimeImage({ Anime: "pat", Color: Color });
    
    return message.channel.send(Data);
  }
};
