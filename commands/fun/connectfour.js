const Discord = require('discord.js')


module.exports = {
  name: 'cn4',
 

  run: async(client , message , args) => {

const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.ConnectFour()
 RockPaperScissors.startGame(message)
                          
                          }
                          } 
    