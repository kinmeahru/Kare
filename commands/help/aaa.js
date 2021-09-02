const { CommandInteraction, Client, WebhookClient } = require('discord.js');
const { error, error_color } = require('../../config.json')
module.exports = {
  name: 'test',

  run: async (client, message, args) => {

   message.channel.send({embed : {
     title: `${error}Missing Argument`,
     description : `The \` \` argument is required\n\nUsage:\`${prefix}\` `,
     color : error_color
   }}).then(msg => {
msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✅':
                                msg.reactions.removeAll();
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    })
                })

   })
   
   
  },
}