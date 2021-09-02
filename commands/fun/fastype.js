const Discord = require('discord.js')


module.exports = {
  name: 'ftype',
  category: "games",
  aliases: ["rockpaperscissors"],

  run: async(client , message , args) => {

const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.FastTyper()
 RockPaperScissors.startGame(message)
                          
                          }
                          } 
    