const Discord = require('discord.js')
const { Pokemon } = require('djs-games')

module.exports = {
  name: 'gpokemon',
  category: "games",
  aliases: ["rockpaperscissors"],

  run: async(client , message , args) => {


const game = new Pokemon({
  message: message,
  token : "your dagpi api token" //you can find it here https://dagpi.xyz/dashboard
})
 game.start(message)
                          
                          }
                          } 
    