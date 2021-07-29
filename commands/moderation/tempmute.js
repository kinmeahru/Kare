const {Message, MessageEmbed}= require('discord.js')//
const { main_color, success_color, error_color, success, error } = require('../../config.json');
const db = require('quick.db')
const Discord = require('discord.js');
const ms = require('ms')
const embed = new Discord.MessageEmbed()
module.exports = {
    name : 'tempmute',
    aliases: ["tm"],
    category: ["🛠moderation"],
    /**
     * @param {Message} message
     */
    run : async(client, message, args) => {
			var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {

        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply({embed : {
					description : `${error} I don't have enough permissions!`,
					color : error_color
				}});
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send({embed : {
					description : `${error} You don't have enough permissions!`,
					color : error_color
				}})
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send({embed : {
					description : `${error} Please mention an user!`,
					color : error_color
				}})
         
        if(!time) return message.channel.send({embed : {
					description : `${error} Please specify a time!`,
					color : error_color
				}})
        
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send({embed : {
									description : `${error} Muted role not found. Attempting to create a one`,
									color : error_color
								}})

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send({embed : {
description : `${success} Successfully created the muted role!`,
color : success_color
								}})
            } catch (error) {
                console.log(error)
            }
        };
        
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send({embed : {
					description : `${error} \`${Member.displayName}\` is already muted!`,
					color : error_color
				}})
        await Member.roles.add(role2)
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
      
            .setColor(success_color)
            .setDescription(`${success} ${Member} is now tempmuted for ${time}!`) 
message.channel.send(embed)
message.delete();

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send({embed : {
							description : ` \`${Member.displayName}\` is now unmuted!`,
							color : `8a8aff`
						}})

            
        }, ms(time))
    }
		if(lang === 'it') {

			
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.reply({embed : {
					description : `${error} Non ho abbastanza permessi!`,
					color : error_color
				}});
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send({embed : {
					description : `${error} Non hai i permessi per farlo!`,
					color : error_color
				}})
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send({embed : {
					description : `${error} Perfavore menziona un utente!`,
					color : error_color
				}})
         
        if(!time) return message.channel.send({embed : {
					description : `${error} Perfavore specifica un tempo!`,
					color : error_color
				}})
        
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send({embed : {
									description : `${error} Il ruolo muted non è stato trovato. Tentando di crearne uno`,
									color : error_color
								}})

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send({embed : {
description : `${success} Creato correttamente il ruolo muted!`,
color : success_color
								}})
            } catch (error) {
                console.log(error)
            }
        };
        
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send({embed : {
					description : `${error} \`${Member.displayName}\` è già mutato!`,
					color : error_color
				}})
        await Member.roles.add(role2)
        
        let embed = new Discord.MessageEmbed()
        .setAuthor(`${message.author.username} - (${message.author.id})`, message.author.displayAvatarURL({dynamic: true}))
      
            .setColor(success_color)
            .setDescription(`${success} ${Member} è adesso mutato per ${time}!`) 
message.channel.send(embed)
message.delete();

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send({embed : {
							description : ` \`${Member.displayName}\` è adesso smutato!`,
							color : `8a8aff`
						}})

            
        }, ms(time))

		}
		}
}