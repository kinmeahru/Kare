const util = require('minecraft-server-util');
 const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'mcserver',
    description: 'get information about a minecraft server',
   async run(client, message, args) {
        if(!args[0]) return message.channel.send({embed : {
    description : `Please provide the server IP`,
    color : `RED`  
  }});
        if(!args[1]) return message.channel.send({embed : {
    description : `Please provide the port of the server`,
    color : `RED`  
  }});
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{
           
            const embed = new MessageEmbed()
            .setColor('#BFCDEB')
            .setTitle('Mc server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
           
 
            message.channel.send(embed);
        })
        .catch ((error) =>{
            message.channel.send('there was an error finding this server');
            throw error;
        })
    }
}