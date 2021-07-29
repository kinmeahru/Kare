const backup = require('discord-backup'); //
const db = require('quick.db');
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');
module.exports = {
    name: "load-backup",
    aliases: ["bload"],
    category: "🔐backup",
    usage: "--backup-load <Backup ID>",
    description: "load a server backup",
    run: async (client, message, args) => {

             var lang = db.get(`language_${message.guild.id}`)
     if(!lang) lang = 'en'

//english
if(lang === 'en') {

      if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed : {
					description : `${error} You can't load a backup without permission!`,
					color : error_color
				}});
    }

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send({embed : {
					description : `${warning}All the server channels, roles, and settings will be cleared. Do you want to continue? Send \`-confirm\` or \`cancel\`!`,
					color : warning_color
				}})

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['-confirm', 'cancel'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === '-confirm';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send({embed : {
											description : `${success} Backup loaded sucessfully!`,
											color : success_color
										}});
            
                }).catch((err) => {
            const erroreemb = new Discord.MessageEmbed()
						.setDescription(`${error} No backup found.`)
						.setColor(error_color)
                    if (err === erroreemb)
                        return message.channel.send({embed : {
													description : `${error}No backup found for ID: ${backupID}`,
													color : error_color
												}});
                    else
                        return message.author.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send({embed : {
									description : `${success} Cancelled!`,
									color : success_color
								}});
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send({embed : {
									description : `${error} Command timeout. Try again`,
									color : error_color
								}});
        })

    }).catch(() => {
        return message.channel.send({embed : {
					description : `${error} No backup found for ID: ${backupID}`,
					color : error_color
				}});
    });
}

if(lang === 'it') {

            if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed : {
					description : `${error} Non puoi caricare un backup senza permessi!`,
					color : error_color
				}});
    }

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send({embed : {
					description : `${warning} Tutti i canali, ruoli, e impostazioni saranno rimpiazzate. Vuoi continuare? Scrivi \`-confirm\` oppure \`cancel\`!`,
					color : warning_color
				}})

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['-confirm', 'cancel'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === '-confirm';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send({embed : {
											description : `${success} Backup caricato con successo!`,
											color : success_color
										}});
            
                }).catch((err) => {
            const erroreemb = new Discord.MessageEmbed()
						.setDescription(`${error} Nessun backup trovato.`)
						.setColor(error_color)
                    if (err === erroreemb)
                        return message.channel.send({embed : {
													description : `${error}Nessuno backup trovato con ID: ${backupID}`,
													color : error_color
												}});
                    else
                        return message.author.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send({embed : {
									description : `${success} Cancelled!`,
									color : success_color
								}});
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send({embed : {
									description : `${error} Tempo scaduto. Riprova.`,
									color : error_color
								}});
        })

    }).catch(() => {
        return message.channel.send({embed : {
					description : `${error} Nessuno backup trovato per ID: ${backupID}`,
					color : error_color
				}});
    });
    }

    if(lang === 'de') {

            if(!message.member.hasPermission('ADMINISTRATOR')){
        return message.channel.send({embed : {
					description : `${error} Sie können ohne Berechtigungen kein Backup hochladen!`,
					color : error_color
				}});
    }

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send({embed : {
					description : `${warning} Alle Kanäle, Rollen und Einstellungen werden ersetzt. Möchtest du fortfahren? schreiben \`-confirm\` oder \`cancel\`!`,
					color : warning_color
				}})

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['-confirm', 'cancel'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === '-confirm';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send({embed : {
											description : `${success} Backup erfolgreich geladen!`,
											color : success_color
										}});
            
                }).catch((err) => {
            const erroreemb = new Discord.MessageEmbed()
						.setDescription(`${error} Keine Backups gefunden.`)
						.setColor(error_color)
                    if (err === erroreemb)
                        return message.channel.send({embed : {
													description : `${error}Keine Backups mit ID gefunden: ${backupID}`,
													color : error_color
												}});
                    else
                        return message.author.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send({embed : {
									description : `${success} abgesagt!`,
									color : success_color
								}});
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send({embed : {
									description : `${error} Auszeit. Versuchen Sie es nochmal.`,
									color : error_color
								}});
        })

    }).catch(() => {
        return message.channel.send({embed : {
					description : `${error} Kein Backup gefunden nach ID: ${backupID}`,
					color : error_color
				}});
    });
    }
}
}