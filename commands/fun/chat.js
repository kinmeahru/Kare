const { chatBot } = require('reconlx') 
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

//
module.exports = {
    name : 'c',
    category: '🎆fun',
    run : async(client, message, args) => {
        chatBot(message, args.join(" "))
        if(!args.join()) return message.channel.send({embed : {
    description : `${error}Please say something!`,
    color : error_color
  }})
    }
}