const discord = require('discord.js')
const x = require('ultrax')

module.exports = {
  name: 'sussy',
  run: async(client, message, args) => {
   let user = message.mentions.users.first() || message.author
   let avatar = user.displayAvatarURL({format: 'png'})
   let sussybaka = new x.sussyBaka(avatar)
   const Image = await sussybaka.get();
   

   message.channel.send(Image)
  }
}