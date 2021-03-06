const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;
const Fetch = require("node-fetch"); //Install Node-fetch - npm i node-fetch
//
module.exports = {
    name: "meme",
    category: "ðfun",
    description: "Send A Meme!",
    usage: "Meme",
    run: async (client, message, args) => {

        //Start

        const Reds = [
            "memes"
           
        ];

        const Rads = Reds[Math.floor(Math.random() * Reds.length)];

        const res = await Fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

        const json = await res.json();

        if (!json[0]) return message.channel.send(`Your Life Lmfao`);

        const data = json[0].data.children[0].data;

        const Embed = new MessageEmbed()
            .setColor(Color)
            .setURL(`https://reddit.com${data.permalink}`)
            .setTitle(data.title)
            .setImage(data.url)
            .setFooter(`${data.ups || 0} ð | ${data.downs || 0} ð | ${data.num_comments || 0} ð¬`)
            .setTimestamp();

        return message.channel.send(Embed);

        //End

    }
};
