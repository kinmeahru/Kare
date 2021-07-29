const db = require('quick.db')
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

module.exports = {
    name : 'captcha',
    run : async(client, message, args) => {
   if(!message.member.hasPermission("MANAGE_GUILD")) return message.lineReplyNoMention({embed : {
      description : `${error}You don't have permission`,
      color : error_color,
    }})
        if(args[0] === 'on') {
            await db.set(`captcha-${message.guild.id}`, true)
            message.channel.send({embed : {
							description : `${success} Turned on the captcha system!`,
							color : ` #0099ff`
						}})
        } else if(args[0] === 'off') {
            await db.delete(`captcha-${message.guild.id}`)
            message.channel.send({embed : {
							description : `${success} Turned off the captcha system!`,
							color : error_color
						}})
        }
    }
}