const Discord = require('discord.js');
const db = require('quick.db')
const { main_color, success_color, error_color, warning_color, success, warning, error } = require('../../config.json');

const fastwords = ['Hello', 'Pineapple', 'Gun', 'Together', 'Bot', 'Italy', 'America', 'Peter', 'Pickle', 'Strawberry', 'World', 'Apple', 'Fruits', 'Youtube', 'England', 'Subject', 'Words', 'Keyboard', 'Mouse', 'Monitor', 'Dog', 'Cat', 'Koala', 'Panda', 'Llama', 'Rick', 'Discord', 'Channel', 'Text', 'Folder', 'File', 'School', 'Pear', 'Peach', 'Banana', 'Germany', 'France', 'Spain', 'Fish', 'Snake', 'Math', 'Story', 'History', 'Class', 'Classroom', 'Videogames', 'Starbucks', 'Coffee', 'Burger King', 'Spanish', 'Italian', 'Football', 'Rugby', 'Golf', 'People', 'Animals', 'Acid', 'Better', 'Cool', 'Ugly', 'Brain', 'Head', 'Arm', 'Foot', 'Glass', 'Glasses', 'Minecraft', 'Swear', 'Cringe', 'Ball', 'Swimming', 'Pool', 'Sun', 'Moon', 'Saturn', 'Elegant', 'Elephant', 'McFlurry', 'Windows', 'Android', 'Great']

const itafastwords = ['Ciao', 'Ananas', 'Pistola', 'Insieme', 'Bot', 'Italia', 'America', 'Peter', 'Cetriolo', 'Fragola', 'Mondo', 'Mela', 'Frutta', 'Youtube', 'Inghilterra', 'Soggetto', 'Parole', 'Tastiera', 'Mouse', 'Monitor', 'Cane', 'Gatto', 'Koala', 'Panda', 'Lama', 'Rick', 'Discord', 'Canale', 'Testo', 'Cartella', 'File', 'Scuola', 'Pera', 'Pesca', 'Banana', 'Germania', 'Francia', 'Spagna ', 'Pesce', 'Serpente', 'Matematica', 'Storia','Classe', 'Videogichi', 'Starbucks', 'Caffè', 'Burger king', 'Spagnolo' , 'Italiano', 'Calcio', 'Rugby', 'Golf', 'Persone', 'Animali', 'Acido', 'Meglio', 'Figo', 'Brutto', 'Cervello', 'Testa', 'Braccio', 'Piede', 'Vetro', 'Occhiali', 'Minecraft', 'Giuro', 'Cringe', 'Palla', 'Nuoto', 'Piscina', 'Sole', 'Luna', 'Saturno' , 'Elegante', 'Elefante', 'McFlurry', 'Windows', 'Android', 'Grande']

module.exports = {
	name: 'tftype',

	run: async(client, message, args) => {
		var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
	await message.channel.send('Wait...(You \__NEED\__ to write the \__UPPER CASE\__ characters)');
await delay(3000);
let timevar = 20000;
let randomword = fastwords[Math.floor(Math.random() * fastwords.length)];

const b = await message.lineReplyNoMention({embed : {
	description : randomword,
	color : "8a8aff"
}})
let i=0;
var data = new Date();
await b.channel.awaitMessages(m => m.author.id == message.author.id,
{max: 1, time: timevar, errors: ['time'],} ).then(async collected => {

	timevar = collected.first().content;
}).catch(() => {return i++;});
if(i===1) return message.reply('The time is ran out!');
var data2 = new Date();
if(timevar===randomword) return message.reply({embed : {
	description : `${success} You are fast! and right!\n\nYou needed \`${(data2-data)/1000} seconds\``,
	color : success_color
}})
else return message.reply({embed : {
	description : `${error} Beep, Boop. That's wrong!`,
	color : error_color
}})


	}
	if(lang === 'it') {

		await message.channel.send('Aspetta...( \__DEVI\__ scrivere perforza le \__MAIUSCOLE\__)');
await delay(3000);
let timevar = 20000;
let randomword = itafastwords[Math.floor(Math.random() * itafastwords.length)];

const b = await message.lineReplyNoMention({embed : {
	description : randomword,
	color : "8a8aff"
}})
let i=0;
var data = new Date();
await b.channel.awaitMessages(m => m.author.id == message.author.id,
{max: 1, time: timevar, errors: ['time'],} ).then(async collected => {

	timevar = collected.first().content;
}).catch(() => {return i++;});
if(i===1) return message.reply('Il tempo è scaduto!');
var data2 = new Date();
if(timevar===randomword) return message.reply({embed : {
	description : `${success} Sei veloce! e giusto!\n\nCi hai messo \`${(data2-data)/1000} secondi\``,
	color : success_color
}})
else return message.reply({embed : {
	description : `${error} Beep, Boop. Hai sbagliato!`,
	color : error_color
}})

	}
  	if(lang === 'de') {
message.channel.send('working in progress...')
		
	}
	}
}
function delay(delayInms) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(2);
		}, delayInms)
	});
}