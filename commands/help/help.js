const Discord = require("discord.js");
const { MessageButton, MessageMenu, MessageMenuOption, MessageActionRow } = require("discord-buttons")
const  ultrax = require('ultrax')
const { readdirSync } = require("fs");
const {default_prefix, main_color } = require("../../config.json");
const prefix = default_prefix



module.exports = {
  name: "help",
  
  category: "📰info",
  description: "Shows all available bot commands.",
  run: async (client, message, args) => {

 const avatar = message.author.displayAvatarURL();



    




// base  : \`${prefix}\` ~ 










        embeds = new Discord.MessageEmbed()
        .setTitle('All the available commands(This command is only in english)')
        .addField('Powered by [Akimi](https://top.gg/bot/869537614796034128)\nPrefix : ', `\`${prefix}\`\n**Link**\n[\`Support server\`](https://discord.gg/cx9GcfxSQ6) | [\`Invite link\`](https://discord.com/oauth2/authorize?client_id=869537614796034128&scope=bot&permissions=8589934583) | [\`Patreon\`](https://www.patreon.com/kajirama)`)
        .setDescription(`List of available commands : 

        ⛔ \`Moderation commands\`
        💻 \`Activity Commands\` 
        🌺 \`Fun Commands\`
        🎮 \`Game Commands\`
        🎵 \`Music Commands\`
        💰 \`Economy Commands\`
        🔞 \`NSFW Commands\`
        🍥 \`Info & Utility\`
        🖼 \`Image Commands\`
        🔐 \`Backup Commands\`
        🏡 \`Return at this page\`
				❌ \`Delete the embed\`
				
         `)
        .setColor(main_color)
        .setTimestamp();
        embed1 = new Discord.MessageEmbed()
        .setTitle(`Activity Commands 💻`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", `
         \`${prefix}ytt\` - Youtube together activity
         \`${prefix}chess\` - Chess activity
         \`${prefix}poker\` - Poker activity
         \`${prefix}fishing\` - Fishing activity
         \`${prefix}betrayal\` - Betrayal activity
 `)
        .setColor("#F4900C")
        .setFooter('2/10')
        .setThumbnail(avatar)
        embed2 = new Discord.MessageEmbed()
        .setTitle(`Moderation commands ⛔`)

        .addField("**commands:**", 
        `\`${prefix}announce\` - Create a custom announce\n\`${prefix}ban\` - Ban a user\n\`${prefix}captcha\` - On/off captcha system\n\`${prefix}clear\` - Clear an amount of messages\n\`${prefix}kick\` - Kick a user\n\`${prefix}lock\` - Lock a channel\n\`${prefix}removerole\` - Remove a role from a user\n\`${prefix}resetnick\` - Reset the nickname of a user\n\`${prefix}set-language\` - Set the language of the bot\n\`${prefix}setnick\` - Set a nickname to a user\n\`${prefix}slowmode\` - Set the slowmode in a channel\n\`${prefix}tempmute\` - Tempmute a user\n\`${prefix}unban\` - Unban a user\n\`${prefix}unlock\`- Unlock a channel\n\`${prefix}unmute\` - Unmute a user\n\`${prefix}voicekick\` - Kick a user from a voice channel`)
        .setColor("#BE1931")
        .setFooter('1/10 P. By Akimi')
        .setThumbnail(`${avatar}`)
        embed3 = new Discord.MessageEmbed()
        .setTitle(`Fun Commands 🌺`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", 
        `\`${prefix}8ball\` - Ask a question to the 8ball\n\`${prefix}achievement\` - Create a custom Minecraft achievement\n\`${prefix}phcomment\` - Send a random ph comment\n\`${prefix}advice\` - Send an advice\n\`${prefix}ascii\` - Convert a text to ascii\n\`${prefix}c\` - Chat with the bot\n\`${prefix}fact\` - Send a fact\n\`${prefix}hack\` - Hack a user\n\`${prefix}howgay\` - Show how much is gay a user\n\`${prefix}joke\` - Send a joke\n\`${prefix}meme\` - Send a meme\n\`${prefix}reverse\` - Reverse a text\n\`${prefix}roast\` - Roast a user\n\`${prefix}say\` - Makes the bot say somethings\n\`${prefix}ship\` - Find out who your soul mate is\n\`${prefix}tts\` - Convert a text to speech\n\`${prefix}chatbot\` - Create a channel called 'chatbot' to use this function\n\`${prefix}creatememe\` - Create a meme with custom text\n\`${prefix}sussy\` - Send a user's avatar with among us feet(that's cringe)\n\`${prefix}bigtext\` - Convert a text to big blue text\n\`${prefix}blackout\` - Set a spoiler between each letter\n\`${prefix}mock\` - Mock a text\n\`${prefix}clyde\` - Send a custom message from clyde bot\n\`${prefix}reasontolive\` - This sends in your dm the reasons why you have to live and why your life is precious!(Is a very long message!)`)
        .setColor("#ccffff")
        .setFooter('3/10 P. By Akimi')
        .setThumbnail(`${avatar}`)
        embed4 = new Discord.MessageEmbed()
        .setTitle(`Game Commands 🎮`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", 
        `\`${prefix}coinflip\` - Flip a coin\n\`${prefix}hangman\` - Hangman game\n\`${prefix}snake\` - The classic snake game\n\`${prefix}ftype\` - Server Fast type game\n\`${prefix}tftype\` - Train yourself for fast type games\n\`${prefix}trivia\` - Random question\n\`${prefix}akinator\` - Akinator game\n\`${prefix}tictactoe\` - TicTacToe game\n\`${prefix}calculator\` - Button calculator\n\`${prefix}rps\` - Play rock, paper, scissors with a user\n\`${prefix}brps\` - Play rock, paper, scissors with the bot\n\`${prefix}cn4\` - Connect four game\n\`${prefix}gnumber\` - Guess the number game\n\`${prefix}horserace\` - Bet in the horse race game`)
        .setColor("#ccccff")
        .setFooter('4/10 P. By Akimi').setThumbnail(`${avatar}`)
        embed5 = new Discord.MessageEmbed()
        .setTitle(`Music Commands 🎵`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", 
        `\`${prefix}play\` - Play a song\n\`${prefix}leave\` - Leave the channel & clear the queue\n\`${prefix}lyrics\` - Search a lyrics of specific song\n\`${prefix}queue\` - Show the song queue\n\`${prefix}loop\` -On/off loop\n\`${prefix}nowplaying\` - Show the song is now playing\n\`${prefix}shuffle\` - Shuffle the songs queue\n\`${prefix}volume\` - Set the volume\n\`${prefix}skip\` - Skip to another song\n\`${prefix}skipto\` - Skip to a song in the queue\n\`${prefix}drop\` - Remove a song in the queue`)
        .setColor("#ff99cc")
        .setFooter('5/10 P. By Akimi')
        .setThumbnail(`${avatar}`)

        embed6 = new Discord.MessageEmbed()
        .setTitle(`Economy Commands 💰`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", `
        \`${prefix}daily\` - Claim your daily reward
        \`${prefix}weekly\` - Claim your weekly reward
        \`${prefix}work\` - Claim the work reward
        \`${prefix}beg\` - Claim the beg reward
        \`${prefix}balance\` - Show the money balance
        \`${prefix}deposit\` - Deposit an amount of coins
        \`${prefix}withdraw\`  - Withdraw an amount of money
        \`${prefix}fish\` - Fish a fish xd
        \`${prefix}addmoney\` - Add money to a user
        \`${prefix}removemoney\` - Remove money from a user
        \`${prefix}sell\` - Sell an item
        \`${prefix}shop\` - Show the item's shop
        \`${prefix}buy\` - Buy an item from the shop
        \`${prefix}roulette\` - Bet at roulette
        \`${prefix}slots\` - Bet at the slots
        `)
        .setColor("#E1C586")
        .setFooter('6/10 P. By Akimi').setThumbnail(`${avatar}`)

        embed7 = new Discord.MessageEmbed()
        .setTitle(`NSFW Commands🔞`)
        .setDescription('Here area all the Available commands (Only Hentai)')
        .addField("commands:", `
        \`${prefix}loli\` - Send loli hentai. Maybe.
        \`${prefix}ass\` - Send ass image
        \`${prefix}bdsm\` - Send bdsm image
        \`${prefix}cum\` - Send cum image
        \`${prefix}doujin\` - Send a doujin image
        \`${prefix}femdom\` - Send femdom image
        \`${prefix}hentai\` - Send classic hentai image
        \`${prefix}maid\` - Send maid image
        \`${prefix}wallpaper\` - Send nsfw desktop wallpaper
        \`${prefix}mobilewallpaper\` - Send nsfw mobile wallpapers
        \`${prefix}orgy\` - Send orgy image
        \`${prefix}panty\` - Send panty image
        \`${prefix}hgifs\` - Send hentai gifs
        \`${prefix}blowjob\` - Send basically girl sucking on a sharp blade
        \`${prefix}pussy\` - Send pussy image
        \`${prefix}uniform\` - Send school uniform hentai
        \`${prefix}feet\` - Send hentai feet image
        \`${prefix}netorare\` - Send netorare image
        
        `)
        .addField("᲼᲼", `
        \`${prefix}kuni\` - Send kuni hentai
        \`${prefix}boobs\` - Send hentai boobs
        \`${prefix}anal\` - Send an anal hentai
        \`${prefix}havatar\` - Send lewd avatar
        \`${prefix}yuri\` - Send yuri hentai
        \`${prefix}trap\` - Send girl hentai! oh no! it's a trap!
        \`${prefix}tits\` - Send hentai tits
        \`${prefix}keta\` - Send keta hentai
        \`${prefix}futanari\` - Send futanari hentai
        \`${prefix}gasm\` - Send orgasms avatar
        \`${prefix}holo\` - Send holo images
        \`${prefix}kemonomimi\` - Send kemonomimi images
        `)
        .setColor("#990000")
        .setFooter('7/10 P. By Akimi').setThumbnail(`${avatar}`)

embed8 = new Discord.MessageEmbed()
        .setTitle(`Info & Utility🍥`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", `
        \`${prefix}invites\` - Shows how many people a user has invited
        \`${prefix}poll\` - Send a poll
        \`${prefix}botinfo\` - Show the bot Info
        \`${prefix}help\` - Send this help command
        \`${prefix}invite\` - Send the bot invite
        \`${prefix}ping\` - Send the bot ping
        \`${prefix}anime\` - Search anime Info
        \`${prefix}bagde\` - Send badge info of an user
        \`${prefix}bug\` - Report a bug
        \`${prefix}djs\` - Search djs information
        \`${prefix}docs\` - Search docs information
        \`${prefix}embed\` - Create an embed
        \`${prefix}github\` - Search github information
        \`${prefix}imdb\` - Search film information
        \`${prefix}ig\` - Search instagram information
        \`${prefix}memberjoinlb\` - Show the join position leaderboard
        \`${prefix}npm\` - Search npm information
        \`${prefix}pokemon\` - Search pokemon information
        \`${prefix}sav\` - Send the server picture
        \`${prefix}ss\` - Take a screenshot on a linked website
        \`${prefix}twitter\` - Search twitter information
        \`${prefix}userinfo\` - Send info of a user
        \`${prefix}wiki\` - Search information on wikipedia(en)
        `)
        .addField('᲼᲼', `
        \`${prefix}calc\` - Calculate something
        \`${prefix}roleinfo\` - Shows info of a mentioned role
        \`${prefix}urban\` - Search in the urban dictionary
        \`${prefix}patreon\` - Send the link of the official patreon
        `)
        .setColor("#990000")
        .setFooter('8/10 P. By Akimi').setThumbnail(`${avatar}`)

        embed9 = new Discord.MessageEmbed()
        .setTitle(`Image Commands🖼`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", `
        \`${prefix}cat\` - Send a cat image
        \`${prefix}cry\` - Send a cry images/gifs
        \`${prefix}deepfry\` - Deepfry a user pfp
        \`${prefix}dog\` - Send a dog image
        \`${prefix}hug\` - Send an hug images/gifs
        \`${prefix}kiss\` - Send a kiss images/gifs
        \`${prefix}neko\` - Send a neko image
        \`${prefix}pat\` - Send a pet images/gifs
        \`${prefix}punch\` - Send a punch images/gifs
        \`${prefix}slap\` - Slap an user
        \`${prefix}avs\` - Does an avatar fusion
        \`${prefix}changemymind\` - Send a custom change my mind meme
        \`${prefix}gay\` - Color gay aa user profile pictures
        \`${prefix}jail\` - Jail a user pfp    
        `)         //invisible character on discord desktop.  
        .addField(`᲼᲼`, `
        \`${prefix}meeting\` - Custom text among us meeting
        \`${prefix}rip\` - Send a tombstone with user profile pictures
        \`${prefix}smartcat\` - Send the smartcat meme with users profile pictures
        \`${prefix}smug\` - Send a smug images/gifs
        \`${prefix}Speed\` - Send 'I'm speed' Car's meme with user profile pictures
        \`${prefix}stonks\` - Send stonks meme with user profile pictures
        \`${prefix}tickle\` - Send a tickle images/gifs
        \`${prefix}triggered\` - Send a triggered user's profile pictures
        \`${prefix}wasted\` - Send a wasted user's profile pictures
        \`${prefix}cuddle\` - Cuddle images/gifs
        \`${prefix}goose\` - Send goose images/gifs
        \`${prefix}poke\` - Send poke images/gifs
        \`${prefix}waifu\` - Find your waifu!
        `)
        .setColor("#669999")
        .setFooter('9/10 P. By Akimi').setThumbnail(`${avatar}`)


				embed10 = new Discord.MessageEmbed()
        .setTitle(`Backup Commands🔐`)
        .setDescription('Here area all the Available commands')
        .addField("commands:", `
        \`${prefix}create-backup\` - Create a backup
        \`${prefix}load-backup\` - Load a backup
        \`${prefix}info-backup\` - Shows info of a backup
        `)
        .setColor("#990000")
        .setFooter('10/10 P. By Akimi').setThumbnail(`${avatar}`)


        pages = [embed1, embed2, embed3, embed4, embed5, embed6, embed7, embed8, embed9, embed10]


        let btn1 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('💻')
            .setID('1');
        let btn2 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('⛔')
            .setID('2');
        let btn3 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('🌺')
            .setID('3');
        let btn4 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('🎮')
            .setID('4');
        let btn5 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('🎵')
            .setID('5');
            let btn6 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('💰')
            .setID('6');
            let btn7 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('🔞')
            .setID('7');
            let btn8 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('🍥')
            .setID('8');
            let btn9 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('🖼')
            .setID('9');
             let btn10 = new MessageButton()
            .setStyle('blurple')
            .setEmoji('🔐')
            .setID('10');
						let btn11 = new MessageButton()
            .setStyle('red')
            .setEmoji('❌')
            .setID('11');
						let btn12 = new MessageButton()
            .setStyle('green')
            .setEmoji('🏡')
            .setID('12');
         

        let row = new MessageActionRow()
            .addComponent(btn2)
            .addComponent(btn1)
            .addComponent(btn3)
            .addComponent(btn4)
            .addComponent(btn5);
            
      let row2 = new MessageActionRow()
      .addComponent(btn6)
      .addComponent(btn7)
      .addComponent(btn8)
       .addComponent(btn9).addComponent(btn10)
       
let row3 = new MessageActionRow()
.addComponent(btn12)
.addComponent(btn11)


    
    const rows = [row, row2, row3]
        
        let msg = await message.channel.send('', {
            components: rows,
            embed: embeds,

          });






         const collector = msg.createButtonCollector((button)=> button.clicker.user.id === message.author.id, {time: 25000000});
         
        collector.on('collect', async (button) => {
            if (button.clicker.member.id !== message.author.id) return;
            if (button.id === '1') {
                await button.reply.defer();
                msg.edit({
                    embed: embed1,
                    components: rows ,
                });
            }
            if (button.id === '2') {
                await button.reply.defer();
                msg.edit({
                    embed: embed2,
                    componenst: rows,
                });
            }
            if (button.id === '3') {
                await button.reply.defer();
                msg.edit({
                    embed: embed3,
                    components: rows,
                });
            }
            if (button.id === '4') {
                await button.reply.defer();
                msg.edit({
                    embed: embed4,
                    components: rows,
                });
            }
            if (button.id === '5') {
                await button.reply.defer();
                msg.edit({
                    embed: embed5,
                    components: rows,
                });
            }
            if (button.id === '6') {
                await button.reply.defer();
                msg.edit({
                    embed: embed6,
                    components: rows,
                });
            }
            if (button.id === '7') {
                await button.reply.defer();
                msg.edit({
                    embed: embed7,
                    components: rows,
                });
            }
            if (button.id === '8') {
                await button.reply.defer();
                msg.edit({
                    embed: embed8,
                    components: rows,
                });
            }
            if (button.id === '9') {
                await button.reply.defer();
                msg.edit({
                    embed: embed9,
                    components: rows,
                });
            }
						 if (button.id === '11') {
                await button.reply.defer();
                msg.delete();
            }

						 if (button.id === '12') {
                await button.reply.defer();
                msg.edit({
                    embed: embeds,
                    components: rows,
                });
            }

						 if (button.id === '10') {
                await button.reply.defer();
                msg.edit({
                    embed: embed10,
                    components: rows,
                });
            }




        })
      


  },
};
