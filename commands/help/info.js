const { main_color } = require('../../config.json')
const { MessageEmbed } = require('discord.js')
const pagination = require('discord.js-pagination')
module.exports = {
    name: 'info',
    
    run: async(client, message, args) => {
         const page1 = new MessageEmbed()
         .setTitle('Commands information')
         .setDescription(`**This show all the commands information you need to know**


          ⚠**The bot can be restarted between 00:00 am and 3:30 am. Be careful**

      **\`Backup commands\` - Keep safe your backup codes and avoid loading backups unnecessarily** 

         \`English commands\` - Some commands are ONLY or a part in english because their api or similar things

         \`Captcha\` - The captcha system can be bypassed by people with closed DM.

         \`Phcomment\` - This command may contain nsfw content **(ULTRA IPER SUPER RARELY)**
         
         \`Music commands\` - We changed the music command from ytdl to discord-music-player sorry! Now the bot is unable to play live music like "lofi hip hop radio" and it's not translate anymore for a little bit. Sorry for the inconvenience! | The max duration is 4 hours

         \`Image\` - Some images command may take 5 seconds or more to load. Just be a little bit patient
 
         \`Buttons\` - Discord buttons may be slow or doesn't load a click. Be patient here too. <3

        

         `)
         .setColor(main_color)

         const page2 = new MessageEmbed()
         .setTitle('Aliases')
         .setDescription(`**This show all the commands aliases**

         __**Moderation Commands**__

        \`clear\` - delete | purge | prune
        \`removerole\` - -role | rmrole
         \`resetnick\` - rn
         \`set-language\` - setlang
         \`setnick\` - sn
         \`slowmode\` - sm
         \`tempmute\` - tm
         \`voicekick\` - -vc
         
         __**Fun commands**__

         \`achievement\` - ach
         \`amazeme\` amzme
       \`creatememe\` - cm
         

         __**Games commands**__

           \`coinflip\` - cf 
           \`hangman\` - hm
           \`TicTacToe\` - ttt
           \`akinator\` - aki

           __**Music commands**__
           
           \`play\` - p
           \`nowplaying\` - np
           
           __**Economy commands**__

           \`addmoney\` - addm
           \`removemoney\` - rmm
           \`balance\` - bal
           \`deposit\` - dep
           \`fish\` - catchfish
           \`roulette\` - roul
           \`slots\` - sl
           \`shop\` - store
           \`weekly\` - week
           \`withdraw\` - wd
           \`work\` - wr

           __**Image commands**__

           \`deepfry\` - df
           \`changemymind\` - cmm
         `)
         .setColor(main_color)
     

     const pages = [
         page1,
         page2
     ]

     const emoji = ["⬅", "➡"]
        

     const timeout = '230000'

     pagination(message, pages, emoji, timeout)
    }
};
