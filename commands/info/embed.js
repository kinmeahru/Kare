const Discord = require("discord.js")//
const db = require('quick.db');
module.exports = {
    name: 'embedgen',
    aliases: ["emb"],
    description: 'embed Generator',
    category: "📰info",
       run: async (client, message, args) => {
           var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

       try {

            const filter = msg => msg.author.id == message.author.id;
            const options = {
                max: 1
            };
            //===============================================================================================
            // Getting Started
            const embed = new Discord.MessageEmbed();
            message.channel.send({embed : {
    description : 'Reply `skip` for next question, Reply `cancel` to stop the command.(Enter a text for example:\n"Do you want set any title"\nYou:"I love cake"',
    color : `#9644FF`  
  }});
            
    
            //===============================================================================================
            // Getting Title
            message.channel.send({embed : {
    description : `So, Do you want your embed to have any title`,
    color : `#9644FF`  
  }});
            let title = await message.channel.awaitMessages(filter, options);
            if (title.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled.`,
    color : `#9644FF`  
  }});
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') embed.setTitle(title.first().content);
    
            //===============================================================================================
            // Getting Description
            message.channel.send({embed : {
    description : `*Great, now set a description!`,
    color : `RED`  
  }});
            let Description = await message.channel.awaitMessages(filter, options);
            if (Description.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed generator cancelled!`,
    color : `#9644FF`  
  }});
            if (!Description) return message.channel.send({embed : {
    description : `You need to set a description!`,
    color : `#9644FF`  
  }});
            if (Description.first().content !== 'skip' && Description.first().content !== 'cancel') embed.setDescription(Description.first().content);
    
            //===============================================================================================
            // Getting Footer""
            message.channel.send({embed : {
    description : `So, Do you want your embed to have any Footer? or cancel`,
    color : `#9644FF`  
  }});
            let Footer = await message.channel.awaitMessages(filter, options);
            if (Footer.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled`,
    color : `#9644FF`  
  }});
            if (Footer.first().content !== 'skip' && Footer.first().content !== 'cancel') embed.setFooter(Footer.first().content); 
    
            //===============================================================================================
            // Getting URL
            
    
            //===============================================================================================
            // Getting ColorS
            message.channel.send({embed : {
    description : `So, Do you want your embed to have any specific color? Default is Black`,
    color : `#9644FF`  
  }});
            let Color = await message.channel.awaitMessages(filter, options);
            if (Color.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled.`,
    color : `#9644FF`  
  }});
            if (Color.first().content !== 'skip' && Color.first().content !== 'cancel') embed.setColor(Color.first().content.toUpperCase() || "2f3136")
    
            //===============================================================================================
            // Getting Author Field""
            message.channel.send({embed : {
    description : `So, Do you want your embed to have any Author Field?`,
    color : `#9644FF`  
  }});
            let Author = await message.channel.awaitMessages(filter, options);
            if (Author.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled.`,
    color : `#9644FF`  
  }});
            if (Author.first().content !== 'skip' && Author.first().content !== 'cancel') embed.setAuthor(Author.first().content);
    
            //===============================================================================================
            // Getting TimeStamp
            message.channel.send({embed : {
    description : 'So, Do you want your embed to have any TimeStamp? Reply `yes` or `no`',
    color : `#9644FF`  
  }});
            let TimeStamp = await message.channel.awaitMessages(filter, options);
            if (TimeStamp.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed generator cancelled`,
    color : `#9644FF`  
  }});
            if (TimeStamp.first().content !== 'yes') embed.setTimestamp();
    
            message.channel.send(embed)
        } catch (error) {
            console.error(error);
        }

    }

if(lang === 'it') {

         try {

            const filter = msg => msg.author.id == message.author.id;
            const options = {
                max: 1
            };
            //===============================================================================================
            // Getting Started
            const embed = new Discord.MessageEmbed();
            message.channel.send({embed : {
    description : 'Rispondi "skip"per passare alla domanda successiva, rispondi "cancel" per interrompere il comando. (Inserisci un testo per esempio:\n"Vuoi impostare un titolo"\nTu:"Amo la torta"',
    color : `#9644FF`  
  }});
            
    
            //===============================================================================================
            // Getting Title
            message.channel.send({embed : {
    description : `Quindi, vuoi impostare un titolo`,
    color : `#9644FF`  
  }});
            let title = await message.channel.awaitMessages(filter, options);
            if (title.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled.`,
    color : `#9644FF`  
  }});
            if (title.first().content !== 'skip' && title.first().content !== 'cancel') embed.setTitle(title.first().content);
    
            //===============================================================================================
            // Getting Description
            message.channel.send({embed : {
    description : `*Fantastico, ora imposta una descrizione`,
    color : `RED`  
  }});
            let Description = await message.channel.awaitMessages(filter, options);

                if (!Description) return message.channel.send({embed : {
    description : `Devi perforza inserire una descrizione!`,
    color : `#9644FF`  
  }});
            if (Description.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed generator cancelled!`,
    color : `#9644FF`  
  }});
        
            if (Description.first().content !== 'skip' && Description.first().content !== 'cancel') embed.setDescription(Description.first().content);
    
            //===============================================================================================
            // Getting Footer""
            message.channel.send({embed : {
    description : `Quindi, vuoi che il tuo embed abbia un Footer? oppure cancel`,
    color : `#9644FF`  
  }});
            let Footer = await message.channel.awaitMessages(filter, options);
            if (Footer.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled`,
    color : `#9644FF`  
  }});
            if (Footer.first().content !== 'skip' && Footer.first().content !== 'cancel') embed.setFooter(Footer.first().content); 
    
            //===============================================================================================
            // Getting URL
            
    
            //===============================================================================================
            // Getting ColorS
            message.channel.send({embed : {
    description : `Quindi, vuoi che il tuo embed abbia un colore? Il nero è di default`,
    color : `#9644FF`  
  }});
            let Color = await message.channel.awaitMessages(filter, options);
            if (Color.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled.`,
    color : `#9644FF`  
  }});
            if (Color.first().content !== 'skip' && Color.first().content !== 'cancel') embed.setColor(Color.first().content.toUpperCase() || "2f3136")
    
            //===============================================================================================
            // Getting Author Field""
            message.channel.send({embed : {
    description : `Quindi, vuoi un campo autore`,
    color : `#9644FF`  
  }});
            let Author = await message.channel.awaitMessages(filter, options);
            if (Author.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed Generator Cancelled.`,
    color : `#9644FF`  
  }});
            if (Author.first().content !== 'skip' && Author.first().content !== 'cancel') embed.setAuthor(Author.first().content);
    
            //===============================================================================================
            // Getting TimeStamp
            message.channel.send({embed : {
    description : 'Quindi, vuoi che il tuo embed abbia una TimeStamp? Rispondi `yes` o `no`',
    color : `#9644FF`  
  }});
            let TimeStamp = await message.channel.awaitMessages(filter, options);
            if (TimeStamp.first().content == 'cancel') return message.channel.send({embed : {
    description : `Embed generator cancelled`,
    color : `#9644FF`  
  }});
            if (TimeStamp.first().content !== 'yes') embed.setTimestamp();
    
            message.channel.send(embed)
        } catch (error) {
            console.error(error);
        }

}

}
}