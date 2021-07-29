const Discord = require('discord.js')


module.exports = {
  name: 'gnumber',
  category: "games",
  aliases: ["rockpaperscissors"],

  run: async(client , message , args) => {

const djsGames = require('djs-games')
const RockPaperScissors = new djsGames.GuessTheNumber()
 RockPaperScissors.startGame(message)
                          
                          }
                          } 
    