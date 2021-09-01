const fishes = require('../../JSON/fishes.json');
let db = require('quick.db');
const ms = require("parse-ms");
const { randomRange } = require('../../functions');
const { MessageEmbed } = require('discord.js');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
    
        name: 'fish',
        aliases: ['catchfish'],
        category: '💰economy',
        description: 'Catch A Fish From A Vast Ocean',
        usage: '[list | rewards] (optional)',
        acessableby: 'everyone'
    ,
    run: async (bot, message, args) => {

            var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

        let user = message.author;

        let bal = db.fetch(`money_${user.id}`)
   
        let fish = await db.fetch(`fish_${user.id}`)
        if (!args[0]) {
            if (bal === null) bal = 0;

            if (fish == null) fish = 0;

            const fishID = Math.floor(Math.random() * 10) + 1;
            let rarity;
            if (fishID < 5) rarity = 'junk';
            else if (fishID < 8) rarity = 'common';
            else if (fishID < 9) rarity = 'uncommon';
            else if (fishID < 10) rarity = 'rare';
            else rarity = 'legendary';
            const fishh = fishes[rarity];
            const worth = randomRange(fishh.min, fishh.max);

            let timeout = 1800000;
            let fishtime = await db.fetch(`fishtime_${user.id}`);

            if (fishtime !== null && timeout - (Date.now() - fishtime) > 0) {
                let time = ms(timeout - (Date.now() - fishtime));

                let timeEmbed = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} You've Recently Casted A Line\n\nFish Again in ${time.minutes}m ${time.seconds}s `);
                return message.channel.send(timeEmbed)
            }

            let embed = new MessageEmbed()
                .setColor(success_color)
                .setDescription(`🎣 You Cast Out Your Line And Caught A ${fishh.symbol}, I Bet It'd Sell For Around ${worth}!`)
            message.channel.send(embed);

            db.add(`money_${user.id}`, worth);
            db.add(`fish_${user.id}`, 1);
            db.set(`fishtime_${user.id}`, Date.now())
        }
        if (args[0] === 'list' || args[0] === 'rewards') {

            let lEmbed = new MessageEmbed()
                .setColor(success_color)
                .setTitle(`List Of Fish Names And Rewards You Can Get`)
                .setDescription(`
\`\`\`🔧Junk      :: Max Reward: 5, Min Reward: 1
🐟Common    :: Max Reward: 25, Min Reward: 10
🐠Uncommon  :: Max Reward: 50, Min Reward: 18
🦑Rare      :: Max Reward: 75, Min Reward: 30
🐋Legendary :: Max Reward: 100, Min Reward: 50\`\`\`
**All reward are random from max/min**
​
`)
                .setFooter(message.guild.name, message.guild.iconURL())
            return message.channel.send(lEmbed);
        }
    }

if(lang === 'it') {
     let user = message.author;

        let bal = db.fetch(`money_${user.id}`)
   
        let fish = await db.fetch(`fish_${user.id}`)
        if (!args[0]) {
            if (bal === null) bal = 0;

            if (fish == null) fish = 0;

            const fishID = Math.floor(Math.random() * 10) + 1;
            let rarity;
            if (fishID < 5) rarity = 'junk';
            else if (fishID < 8) rarity = 'common';
            else if (fishID < 9) rarity = 'uncommon';
            else if (fishID < 10) rarity = 'rare';
            else rarity = 'legendary';
            const fishh = fishes[rarity];
            const worth = randomRange(fishh.min, fishh.max);

            let timeout = 1800000;
            let fishtime = await db.fetch(`fishtime_${user.id}`);

            if (fishtime !== null && timeout - (Date.now() - fishtime) > 0) {
                let time = ms(timeout - (Date.now() - fishtime));

                let timeEmbed = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error} Hai già pescato recentemente\n\nPesca di nuovo tra ${time.minutes}m ${time.seconds}s `);
                return message.channel.send(timeEmbed)
            }

            let embed = new MessageEmbed()
                .setColor('GREEN')
                .setDescription(`🎣 Hai pescato un  ${fishh.symbol}, Scommetto che si puo' vendere intorno ai ${worth}!`)
            message.channel.send(embed);

            db.add(`money_${user.id}`, worth);
            db.add(`fish_${user.id}`, 1);
            db.set(`fishtime_${user.id}`, Date.now())
        }
        if (args[0] === 'list' || args[0] === 'rewards') {

            let lEmbed = new MessageEmbed()
                .setColor(success_color)
                .setTitle(`Lista dei pesci e delle ricompense che puoi ottenere:`)
                .setDescription(`
\`\`\`🔧Rottame\nRicompensa Massima: 5, Ricompensa Minima: 1

🐟Comune\nRicompensa Massima: 25, Ricompensa Minima: 10

🐠Non Comune\nRicompensa Massima: 50, Ricompensa Minima: 18

🦑Raro\nRicompensa Massima: 75, Ricompensa Minima: 30

🐋Leggendario\nRicompensa Massima: 100, Ricompensa Minima: 50\`\`\`
**Tutte le ricompense sono casuali da max/min**
​
`)
                .setFooter(message.guild.name, message.guild.iconURL())
            return message.channel.send(lEmbed);
        }

}


if(lang === 'de') {
     let user = message.author;

        let bal = db.fetch(`money_${user.id}`)
   
        let fish = await db.fetch(`fish_${user.id}`)
        if (!args[0]) {
            if (bal === null) bal = 0;

            if (fish == null) fish = 0;

            const fishID = Math.floor(Math.random() * 10) + 1;
            let rarity;
            if (fishID < 5) rarity = 'junk';
            else if (fishID < 8) rarity = 'common';
            else if (fishID < 9) rarity = 'uncommon';
            else if (fishID < 10) rarity = 'rare';
            else rarity = 'legendary';
            const fishh = fishes[rarity];
            const worth = randomRange(fishh.min, fishh.max);

            let timeout = 1800000;
            let fishtime = await db.fetch(`fishtime_${user.id}`);

            if (fishtime !== null && timeout - (Date.now() - fishtime) > 0) {
                let time = ms(timeout - (Date.now() - fishtime));

                let timeEmbed = new MessageEmbed()
                    .setColor(error_color)
                    .setDescription(`${error}Du hast vor kurzem schon gefischt\n\nZwischendurch wieder Angeln ${time.minutes}m ${time.seconds}s `);
                return message.channel.send(timeEmbed)
            }

            let embed = new MessageEmbed()
                .setColor('GREEN')
                .setDescription(`🎣 Du hast gezeichnet  ${fishh.symbol}, Ich wette, du kannst herumverkaufen ${worth}!`)
            message.channel.send(embed);

            db.add(`money_${user.id}`, worth);
            db.add(`fish_${user.id}`, 1);
            db.set(`fishtime_${user.id}`, Date.now())
        }
        if (args[0] === 'list' || args[0] === 'rewards') {

            let lEmbed = new MessageEmbed()
                .setColor(success_color)
                .setTitle(`Liste der Fische und Belohnungen, die Sie erhalten können:`)
                .setDescription(`
\`\`\`🔧Schrott\nMax-Belohnung: 5, Mindestbelohnung: 1

🐟Normal\nMaximale Belohnung: 25, Mindestbelohnung: 10

🐠Ungewöhnlich\nMax-Belohnung: 50, Mindestbelohnung: 18

🦑Seltene\nMax-Belohnung: 75, Mindestbelohnung: 30

🐋Legendär\nMax. Belohnung: 100, Mindestbelohnung: 50 \`\`\`
** Alle Belohnungen sind zufällig von max / min **
​
`)
                .setFooter(message.guild.name, message.guild.iconURL())
            return message.channel.send(lEmbed);
        }

}

}
}
