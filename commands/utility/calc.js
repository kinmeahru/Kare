const Discord = require('discord.js');
const math = require('mathjs');
const { error, error_color, main_color } = require('../../config.json')
const db = require('quick.db')
module.exports = {
  
        name: "calc",
  
    run: async (bot, message, args) => {
var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
        if (!args[0]) return message.channel.send({embed : {
          description : `${error} Provide something to calculate!`,
          color : error_color
        }});

        let result;
        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"));
        } catch (e) {
            return message.channel.send({embed : {
              description : "**Enter Valid Calculation!**\n\n**List of Calculations** - \n1. **sqrt equation** - `sqrt(3^2 + 4^2) = 5`\n2. **Units to Units** - `2 inch to cm = 0.58`\n3. **Complex Expressions Like** - `cos(45 deg) = 0.7071067811865476`\n4. **Basic Maths Expressions** - `+, -, ^, /, decimals` = **2.5 - 2 = 0.5**",
              color : error_color
            }});
        }

        let embed = new Discord.MessageEmbed()
            .setColor(main_color)
            .setAuthor(`Calculator`, message.author.displayAvatarURL({ dynamic: true }))
            .addField("**Operation**", `\`\`\`Js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
            .addField("**Result**", `\`\`\`Js\n${result}\`\`\``)
            .setFooter(message.author.username);
        message.channel.send(embed);
    }
    if(lang === 'it') {
              if (!args[0]) return message.channel.send({embed : {
          description : `${error} Provvedi qualcosa da calcolare!`,
          color : error_color
        }});

        let result;
        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"));
        } catch (e) {
            return message.channel.send({embed : {
              description : "**Inserisci una valida operazione!**\n\n**Liste delle operazioni** - \n1. **sqrt equation** - `sqrt(3^2 + 4^2) = 5`\n2. **Units to Units** - `2 inch to cm = 0.58`\n3. **Complex Expressions Like** - `cos(45 deg) = 0.7071067811865476`\n4. **Basic Maths Expressions** - `+, -, ^, /, decimals` = **2.5 - 2 = 0.5**",
              color : error_color
            }});
        }

        let embed = new Discord.MessageEmbed()
            .setColor(main_color)
            .setAuthor(`Calcolatrice`, message.author.displayAvatarURL({ dynamic: true }))
            .addField("**Operazione**", `\`\`\`Js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
            .addField("**Risultato**", `\`\`\`Js\n${result}\`\`\``)
            .setFooter(message.author.username);
        message.channel.send(embed);
    }
     if(lang === 'it') {
              if (!args[0]) return message.channel.send({embed : {
          description : `${error} Provvedi qualcosa da calcolare!`,
          color : error_color
        }});

        let result;
        try {
            result = math.evaluate(args.join(" ").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/"));
        } catch (e) {
            return message.channel.send({embed : {
              description : "**Bitte geben Sie einen gültigen Vorgang ein!**\n\n**Listen der Operationen** - \n1. **sqrt equation** - `sqrt(3^2 + 4^2) = 5`\n2. **Units to Units** - `2 inch to cm = 0.58`\n3. **Complex Expressions Like** - `cos(45 deg) = 0.7071067811865476`\n4. **Basic Maths Expressions** - `+, -, ^, /, decimals` = **2.5 - 2 = 0.5**",
              color : error_color
            }});
        }

        let embed = new Discord.MessageEmbed()
            .setColor(main_color)
            .setAuthor(`Taschenrechner`, message.author.displayAvatarURL({ dynamic: true }))
            .addField("**Operationen**", `\`\`\`Js\n${args.join("").replace(/[x]/gi, "*").replace(/[,]/g, ".").replace(/[÷]/gi, "/")}\`\`\``)
            .addField("**Ergebnis**", `\`\`\`Js\n${result}\`\`\``)
            .setFooter(message.author.username);
        message.channel.send(embed);
    }
    }
}
