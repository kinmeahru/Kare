const Discord = require('discord.js')
const { Pokemon } = require('djs-games')
const { dagpi_token } = require("../../config.json")
module.exports = {
  name: 'gpokemon',
  category: "games",

  run: async(client , message , args) => {


const game = new Pokemon({
  message: message,
  token : dagpi_token //you can find it here https://dagpi.xyz/dashboard
})
 game.start(message)
                          
                          }
                          } 
    
