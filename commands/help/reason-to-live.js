const db = require('quick.db')
module.exports = {
  name: 'reasontolive',
  run: async(client, message, args) => {
    var lang = db.get(`language_${message.guild.id}`)
       if(!lang) lang = 'en'

//english
if(lang === 'en') {
    message.author.send(`Reasons to live:

“Suicide doesn’t stop the pain,” “It gives it to someone else.”
- [ ] 1: We would miss you 
- [ ] 2: It’s worth it to be alive 
- [ ] 3: It does get better, believe it or not, it will eventually get better. 
- [ ] 4: There’s so much you would miss out on doing. 
- [ ] 5: You are worth it don’t let anyone, even yourself tell you otherwise. 
- [ ] 6: God made you for a reason, you have a reason. 
- [ ] 7: There is always a reason to live! 
- [ ] 8: So many people care about you 
- [ ] 9: You are amazing 
- [ ] 10: I don’t even know you and I love you 
- [ ] 11: I care for you 
- [ ] 12: There are plenty of people that love you 
- [ ] 13: Youre literally perfect!! <3 
- [ ] 14: There are plenty of people that care for you 
- [ ] 15: God loves you 
- [ ] 16: God cares about you
 - [ ] 17: Sometimes life is hard but it will make you a stronger person don’t worry! 
- [ ] 18: What about all the things you’ve always wanted to do?What about all the things you’ve planned,but never got around doing? You can’t do them if your dead. 
- [ ] 19: I want you to be alive 
- [ ] 20: So many people want you alive! 
- [ ] 21: You won’t be able to listen to Music if you die 
- [ ] 22: You’ll never be able to listen to your favorite song if you die. 
- [ ] 23: You’ll never be able to listen to your favorite singer if you’re gone 
- [ ] 24: You’ll never be able to listen to your favorite rapper if you’re gone. 
- [ ] 25: listening to really loud music 
- [ ] 26: Killing yourself is never worth it,you’ll hit both yourself & the people who care about you. 
- [ ] 27: There are so many people that would miss you,including me 
- [ ] 28: the clouds 
- [ ] 29: You are gorgeous 
- [ ] 30: Someone out there would die for you :’) 
 `).then(message.author.send(` 
- [ ] 31: How do you think your family would feel? 
- [ ] 32: Proving people wrong with your success. 
- [ ] 33: Watching the jerks that doubted you fail at life. 
- [ ] 34: You’ll never have the feeling of walking into a warm building on a cold day.
- [ ] 35: You’ll never have the feeling of walking into a cold building on a hot day.
- [ ] 36: Being stupid in public just because you can. 
- [ ] 37: Helping other people. 
- [ ] 38: You have a future to live for.. 
- [ ] 39: Being alive is good 
- [ ] 40: thinking about happy memories 
- [ ] 41: Finding your soulmate. 
- [ ] 42: All nighters!!! 
- [ ] 43: Sleeping in all day
- [ ] 44: You can look back at yourself later in your life and be glad you didn’t commit suicide. 
- [ ] 45: Nobody could ever replace you 
- [ ] 46: You’re unique 
- [ ] 47: pets 
- [ ] 48: petting pets 
- [ ] 49: Netflix and movies 
- [ ] 50: Decorating the Christmas tree 
- [ ] 51: Dreams that make you smile 
- [ ] 52: Breakfast in bed 
- [ ] 53: New clothes 
- [ ] 54: New shoes 
- [ ] 55: New books 
- [ ] 56: Sunrises and Sunsets 
- [ ] 57: Friends 
- [ ] 58: The ocean 
- [ ] 59: Sunlight 
- [ ] 60: Your family `)).then(message.author.send(`- [ ] 61: Inside jokes 
- [ ] 62: Birthdays 
- [ ] 63: Christmas 
- [ ] 64: Family traditions 
- [ ] 65: The taste of your favorite food 
- [ ] 66: Favorite tv show 
- [ ] 67: Favorite movie 
- [ ] 68: Going to new places 
- [ ] 69: The ability to peruse whatever you choose (there are over 7 billion people on Earth, don’t be afraid to be you) 
- [ ] 70: To earn money and rewards 
- [ ] 71: You can always flip your life around. 
- [ ] 72: To find the perfect job/career for you 
- [ ] 73: Pizza 
- [ ] 74: Kittens 
- [ ] 75: New haircuts 
- [ ] 76: Moments you can look back to and laugh at 
- [ ] 77: The clouds 
- [ ] 78: The world is better with you in it 
- [ ] 79: Roller Coasters 
- [ ] 80: Showers 
- [ ] 81: Cake 
- [ ] 82:Growing old 
- [ ] 83: Growing old with the person you love 
- [ ] 84: Singing 
- [ ] 85: Sleeping 
- [ ] 86: Icecream 
- [ ] 87: Cookies 
- [ ] 88: food in general 
- [ ] 89: Movie nights 
- [ ] 90: Candy 
- [ ] 91: Popcorn 
- [ ] 92: Daydreaming 
- [ ] 93: Happy moments 
- [ ] 94: Halloween 
- [ ] 95: Sleepovers 
- [ ] 96: Parties 
- [ ] 97: Having a good personality 
- [ ] 98: Making people happy 
- [ ] 99: Bonfires 
- [ ] 100: Sitting on rooftops 
- [ ] 101: Vacations 
- [ ] 102: Hearing crazy stories 
- [ ] 103: Telling crazy stories 
- [ ] 104: Treehouses 
- [ ] 105: Starbucks 
- [ ] 106: You’ve changed someone’s life 
- [ ] 107: If you’re gone how will you achieve great things? 
- [ ] 108: Everyone has talent including you 
- [ ] 109: Eating crazy food 
- [ ] 110: Hanging out with your friends `)).then(message.author.send(`- [ ] 111: Nobody could ever replace you 
- [ ] 112: You have so much to live for 
- [ ] 113: Your dreams need some fulfilling to do 
- [ ] 114: Living life to the fullest 
- [ ] 115: Heck,I would miss you like crazy 
- [ ] 116: Your family and friends would be devastated if you were gone 
- [ ] 117: Someone out there is constantly praying to meet someone like you 
- [ ] 118: Your future 
- [ ] 119: You could save so many lives 
- [ ] 120: You are too beautiful to disappear 
- [ ] 121: You are bigger than any of your problems 
- [ ] 122: You are never alone during this struggle 
- [ ] 123: Tomorrow is a new day! 
- [ ] 124: You are worth more than you think 
- [ ] 125: But,the final and most important one is, just being able to experience life,because even if your life doesn’t seem so great right now,anything could happen!

💗💗 

songs that could make you happy 🥺 
Personal by HRVY: @YJpE 
I like me better by Lauv: @ozwA 
Classic by MKTO: @A4Ds 
Just friends by JORDY: @eINM 
Eastside by Benny Blanco,Halsey,& Khalid: @UvGY 
What makes you beautiful by 1D: @-A4E 
Cheerleader by OMI: @QfW8 
Everybody talks by Neon Trees: @84lE 
Dear future husband by Meghan Trainor: @D_40 
Backyard Boy by Claire Rosinkranz: @shy8 
Shut up and dance with me by WALK THE MOON: @lx6Q 
iSpy by KYLE: @gMPU 
Trap queen by Fetty Wap: @NKio 
LMK by Lil XXEL: @IC24 
Dynamite by BTS: @WNZg 
`)).then(message.author.send(`- fun facts! 

1.Otters hold hands when sleeping is they don’t drift away from each other 
2.Penguins only have one mate their entire life, they also propose by giving them a pebble 
3.Cows have best friends 
4.you’re perfect <3 
- another message: - 

💗💗 

To all those people being bullied 
- To all those people who have lost a loved one 
- To all those people who have lost a pet 
- To all those people being abused 
- To all those people going through depression 
- To all those people with anxiety 
- To all those people in poverty 
- To all those people going through a breakup 
- To all those people having a bad day 
- To all those people with insecurities 
- To all those people just having a hard time 

Don’t forget 
- Your weakness today 
- Is your strength tomorrow 
- It always gets better 
- Your loved ones will remain in your hearts 
- You always have the memories 
- Love yourself 
- Stand up for yourself 
- Money can’t buy happiness 
- Those lovers 
- Just weren’t right 
- Don’t abuse yourself 
- Don’t abuse others 
- Kill them with kindness 
- Treat people with kindness 
- We’ve all had these times 
- There will always be a hole in our chests 

But 
- Let’s all be each others’ strength 
- whether you’re 
- Black 
- White 
- LGBTQ+ 
- Christian 
- Atheist 
- Etc 

- Love yourself 
- Love others 
- Don’t cut 
- Don’t kill 
- Don’t criticize 
- Don’t beg 
- Don’t do drugs 
- Don’t starve yourself 
- Don’t starve others 

We aren’t supposed to do any of that 
- Just keep your strength 
- Keep your faith 
- Don’t change because you were told to 
- Be yourself 
- Sometimes playing a character, isn’t the best thing to do. Have a great day, and don’t stop spreading awareness about things that are happening currently in the world.`)).then(message.author.send("<3"))
  }

  if(lang === 'it') {
    message.author.send(`Ragioni per vivere:

"Il suicidio non ferma il dolore", "Lo dà a qualcun altro".
- [] 1: Ci mancheresti
- [] 2: Ne vale la pena essere vivi
- [] 3: Migliora, che tu ci creda o no, alla fine migliorerà.
- [] 4: Ci sono così tante cose che ti perderesti.
- [] 5: Ne vali la pena non permettere a nessuno, nemmeno a te stesso, di dirti il ​​contrario.
- [] 6: Dio ti ha creato per una ragione, hai una ragione.
- [] 7: C'è sempre una ragione per vivere!
- [] 8: Così tante persone si preoccupano per te
- [] 9: Sei fantastico
- [] 10: Non ti conosco nemmeno e ti amo
- [] 11: Ci tengo a te
- [] 12: Ci sono un sacco di persone che ti amano
- [] 13: Sei letteralmente perfetto!! <3
- [] 14: Ci sono un sacco di persone che si prendono cura di te
- [] 15: Dio ti ama
- [] 16: Dio si prende cura di te
 - [] 17: A volte la vita è dura ma ti renderà una persona più forte, non preoccuparti!
- [] 18: E tutte le cose che hai sempre voluto fare? Che dire di tutte le cose che hai pianificato, ma che non sei mai riuscito a fare? Non puoi farli se sei morto.
- [] 19: Voglio che tu sia vivo
- [] 20: Tante persone ti vogliono vivo!
- [] 21: Non potrai ascoltare la musica se muori
- [] 22: Se muori non potrai mai ascoltare la tua canzone preferita.
- [] 23: Non potrai mai ascoltare il tuo cantante preferito se non ci sei
- [] 24: Non sarai mai in grado di ascoltare il tuo rapper preferito se non ci sei.
- [] 25: ascoltare musica ad alto volume
- [] 26: Non vale mai la pena uccidersi, colpirai sia te stesso che le persone che ti vogliono bene.
- [] 27: Ci sono così tante persone a cui mancheresti, me compreso
- [] 28: le nuvole
- [] 29: Sei bellissima/o
- [] 30: Qualcuno là fuori morirebbe per te:')
 `).then(message.author.send(` 
- [ ] 31: Come pensi che si sentirebbe la tua famiglia?
- [ ] 32: Dimostrare che le persone hanno torto con il tuo successo.
- [ ] 33: Guardando i cretini che dubitavano di fallire nella vita.
- [ ] 34: Non avrai mai la sensazione di entrare in un edificio caldo in una giornata fredda.
- [ ] 35: Non avrai mai la sensazione di entrare in un edificio freddo in una giornata calda.
- [ ] 36: Essere stupidi in pubblico solo perché puoi.
- [ ] 37: Aiutare altre persone.
- [ ] 38: Hai un futuro per cui vivere..
- [ ] 39: Essere vivi è bello
- [ ] 40: pensare a ricordi felici
- [ ] 41: Trovare la tua anima gemella.
- [ ] 42: Tutte le sere!!!
- [ ] 43: Dormire tutto il giorno
- [ ] 44: Puoi guardare indietro a te stesso più tardi nella tua vita ed essere felice di non esserti suicidato.
- [ ] 45: Nessuno potrà mai sostituirti
- [ ] 46: Sei unico
- [ ] 47: animali domestici
- [ ] 48: accarezzare animali domestici
- [ ] 49: Netflix e film
- [ ] 50: Decorare l'albero di Natale
- [ ] 51: Sogni che ti fanno sorridere
- [ ] 52: Colazione a letto
- [ ] 53: Vestiti nuovi
- [ ] 54: Scarpe nuove
- [ ] 55: Nuovi libri
- [ ] 56: Albe e Tramonti
- [ ] 57: Amici
- [ ] 58: L'oceano
- [ ] 59: Luce solare
- [ ] 60: La tua famiglia `)).then(message.author.send(`- [ ] 61: Barzellette interne
- [ ] 62: Compleanni
- [ ] 63: Natale
- [ ] 64: Tradizioni di famiglia
- [ ] 65: Il gusto del tuo cibo preferito
- [ ] 66: programma televisivo preferito
- [ ] 67: Film preferito
- [ ] 68: Andare in posti nuovi
- [ ] 69: La capacità di esaminare qualunque cosa tu scelga (ci sono oltre 7 miliardi di persone sulla Terra, non aver paura di essere te stesso)
- [ ] 70: Per guadagnare denaro e ricompense
- [ ] 71: Puoi sempre capovolgere la tua vita.
- [ ] 72: Per trovare il lavoro/la carriera perfetta per te
- [ ] 73: Pizza
- [ ] 74: Gattini
- [ ] 75: Nuovi tagli di capelli
- [ ] 76: Momenti a cui puoi ripensare e ridere
- [ ] 77: Le nuvole
- [ ] 78: Il mondo è migliore con te dentro
- [ ] 79: Montagne russe
- [ ] 80: Docce
- [ ] 81: Torta
- [ ] 82:Invecchiare
- [ ] 83: Invecchiare con la persona che ami
- [ ] 84: Canto
- [ ] 85: Dormire
- [ ] 86: Gelato
- [ ] 87: Biscotti
- [ ] 88: cibo in generale
- [ ] 89: Serate cinematografiche
- [ ] 90: Caramelle
- [ ] 91: Popcorn
- [ ] 92: Sognare ad occhi aperti
- [ ] 93: Momenti felici
- [ ] 94: Halloween
- [ ] 95: Pigiama party
- [ ] 96: Feste
- [ ] 97: Avere una buona personalità
- [ ] 98: Rendere felici le persone
- [ ] 99: Falò
- [ ] 100: Seduti sui tetti
- [ ] 101: Vacanze
- [ ] 102: Ascoltare storie folli
- [ ] 103: Raccontare storie folli
- [ ] 104: Case sugli alberi
- [ ] 105: Starbucks
- [ ] 106: Hai cambiato la vita di qualcuno
- [ ] 107: Se te ne andrai come farai a ottenere grandi cose?
- [ ] 108: Tutti hanno talento incluso te
- [ ] 109: Mangiare cibi pazzi
- [ ] 110: Uscire con i tuoi amici `)).then(message.author.send(`- [ ] 111: Nessuno potrà mai sostituirti
- [ ] 112: Hai così tanto per cui vivere
- [ ] 113: I tuoi sogni hanno bisogno di essere realizzati
- [ ] 114: Vivere la vita al massimo
- [ ] 115: Diamine, mi mancherai come un matto
- [ ] 116: La tua famiglia e i tuoi amici sarebbero devastati se te ne andassi
- [ ] 117: Qualcuno là fuori prega costantemente di incontrare qualcuno come te
- [ ] 118: Il tuo futuro
- [ ] 119: Potresti salvare così tante vite
- [ ] 120: Sei troppo bella per scomparire
- [ ] 121: Sei più grande di tutti i tuoi problemi
- [ ] 122: Non sei mai solo durante questa lotta
- [ ] 123: Domani è un nuovo giorno!
- [ ] 124: Vali più di quanto pensi
- [ ] 125: Ma, l'ultimo e più importante è, solo essere in grado di sperimentare la vita, perché anche se la tua vita non sembra così grande in questo momento, potrebbe succedere di tutto!

💗💗

canzoni che ti potrebbero rendere felice 🥺 
Personal di HRVY: @YJpE 
I like me better di Lauv: @ozwA 
Classic di MKTO: @A4Ds 
Just friends di JORDY: @eINM 
Eastside di Benny Blanco,Halsey,& Khalid: @UvGY 
What makes you beautiful di 1D: @-A4E 
Cheerleader di OMI: @QfW8 
Everybody talks di Neon Trees: @84lE 
Dear future husband di Meghan Trainor: @D_40 
Backyard Boy di Claire Rosinkranz: @shy8 
Shut up and dance with me di WALK THE MOON: @lx6Q 
iSpy di KYLE: @gMPU 
Trap queen di Fetty Wap: @NKio 
LMK di Lil XXEL: @IC24 
Dynamite di BTS: @WNZg 
`)).then(message.author.send(`- fatti divertenti!

1. Le lontre si tengono per mano quando dormono se non si allontanano l'una dall'altra
2. I pinguini hanno un solo compagno per tutta la vita, si propongono anche dando loro un sassolino
3. Le mucche hanno i migliori amici
4.sei perfetto <3
- un altro messaggio: -

💗💗

A tutte quelle persone vittime di bullismo
- A tutte quelle persone che hanno perso una persona cara
- A tutte quelle persone che hanno perso un animale domestico
- A tutte quelle persone che subiscono abusi
- A tutte quelle persone che stanno attraversando la depressione
- A tutte quelle persone con ansia
- A tutte quelle persone in povertà
- A tutte quelle persone che stanno attraversando una rottura
- A tutte quelle persone che hanno avuto una brutta giornata
- A tutte quelle persone con insicurezze
- A tutte quelle persone che stanno attraversando un momento difficile

Non dimenticare
- La tua debolezza oggi
- È la tua forza domani?
- Va sempre meglio
- I vostri cari rimarranno nei vostri cuori
- Hai sempre i ricordi
- Amare se stessi
- Farti valere
- I soldi non possono comprare la felicità
- Quegli amanti
- Semplicemente non era giusto
- Non abusare di te stesso
- Non abusare degli altri
- Uccidili con gentilezza
- Tratta le persone con gentilezza
- Abbiamo avuto tutti questi tempi
- Ci sarà sempre un buco nel nostro petto

Ma
- Cerchiamo di essere tutti la forza degli altri
- se sei
- Nero
- Bianca
- LGBTQ+
- Cristiano
- Ateo
- Eccetera

- Amare se stessi
- Ama gli altri
- Non tagliare
- Non uccidere
- Non criticare
- Non implorare
- Non drogarti
- Non morire di fame
- Non far morire di fame gli altri

Non dovremmo fare niente di tutto questo
- Mantieni la tua forza
- Mantieni la tua fede
- Non cambiare perché ti è stato detto di farlo
- Sii te stesso
- A volte interpretare un personaggio non è la cosa migliore da fare. Buona giornata e non smettere di diffondere consapevolezza sulle cose che stanno accadendo attualmente nel mondo.`)).then(message.author.send("<3"))
  }
  if(lang === 'de') {
    message.author.send(`Gründe zu leben:

„Selbstmord stoppt den Schmerz nicht“, „Er gibt ihn jemand anderem“.
- [] 1: Wir würden dich vermissen
- [] 2: Es lohnt sich, am Leben zu sein
- [] 3: Werde es besser, ob du es glaubst oder nicht, irgendwann wird es besser.
- [] 4: Es gibt so viele Dinge, die Sie verpassen würden.
- [] 5: Es lohnt sich, sich von niemandem, auch nicht von sich selbst, etwas anderes sagen zu lassen.
- [] 6: Gott hat dich aus einem Grund erschaffen, du hast einen Grund.
- [] 7: Es gibt immer einen Grund zu leben!
- [] 8: So viele Leute interessieren sich für dich
- [] 9: Du bist fantastisch
- [] 10: Ich kenne dich nicht einmal und ich liebe dich
- [] 11: Ich kümmere mich um dich
- [] 12: Es gibt viele Leute, die dich lieben
- [] 13: Du bist buchstäblich perfekt !! <3
- [] 14: Es gibt viele Leute, die sich um dich kümmern
- [] 15: Gott liebt dich
- [] 16: Gott kümmert sich um dich
- [] 17: Manchmal ist das Leben hart, aber es macht dich zu einer stärkeren Person, keine Sorge!
- [] 18: Und all die Dinge, die du schon immer machen wolltest? Was ist mit all den Dingen, die Sie geplant haben, aber nie tun konnten? Sie können sie nicht tun, wenn Sie tot sind.
- [] 19: Ich möchte, dass du am Leben bist
- [] 20: So viele Leute wollen dich lebend!
- [] 21: Du wirst keine Musik hören können, wenn du stirbst
- [] 22: Wenn du stirbst, wirst du nie dein Lieblingslied hören können.
- [] 23: Du wirst deinen Lieblingssänger nie hören können, wenn du nicht da bist
- [] 24: Du wirst deinen Lieblingsrapper nie hören können, wenn du nicht da bist.
- [] 25: Höre laute Musik
- [] 26: Es lohnt sich nie, dich umzubringen, du wirst sowohl dich selbst als auch die Menschen, die dich lieben, schlagen.
- [] 27: Es gibt so viele Leute, die du vermissen würdest, mich eingeschlossen
- [] 28: die Wolken
- [] 29: Du bist schön
- [] 30: Jemand da draußen würde für dich sterben:')
 `).then(message.author.send(` 
- [] 31: Wie würde sich deine Familie fühlen?
- [] 32: Beweisen Sie, dass die Leute mit Ihrem Erfolg falsch liegen.
- [] 33: Blick auf die Idioten, die daran zweifelten, dass sie im Leben scheitern würden.
- [] 34: Sie werden nie das Gefühl haben, an einem kalten Tag ein heißes Gebäude zu betreten.
- [] 35: Sie werden nie das Gefühl haben, an einem heißen Tag ein kaltes Gebäude zu betreten.
- [] 36: Iss Narren in der Öffentlichkeit, nur weil du kannst.
- [] 37: Anderen Menschen helfen.
- [] 38: Du hast eine Zukunft für die du leben kannst ..
- [] 39: Lebendig essen ist schön
- [] 40: denke an glückliche Erinnerungen
- [] 41: Finden Sie Ihren Seelenverwandten.
- [] 42: Jede Nacht !!!
- [] 43: Den ganzen Tag schlafen
- [] 44: Du kannst später in deinem Leben auf dich selbst zurückblicken und froh sein, dass du keinen Selbstmord begangen hast.
- [] 45: Niemand wird jemals ersetzen
- [] 46: Sei einzigartig
- [] 47: Haustiere
- [] 48: Haustiere streicheln
- [] 49: Netflix und Filme
- [] 50: Weihnachtsbaum schmücken
- [] 51: Träume, die dich zum Lächeln bringen
- [] 52: Frühstück im Bett
- [] 53: Neue Kleider
- [] 54: Neue Schuhe
- [] 55: Neue Bücher
- [] 56: Sonnenaufgänge und Sonnenuntergänge
- [] 57: Freunde
- [] 58: Das Meer
- [] 59: Sonnenlicht
- [] 60: Deine Familie `)).then(message.author.send(`- [] 61: Interne Witze
- [] 62: Geburtstage
- [] 63: Weihnachten
- [] 64: Familientraditionen
- [] 65: Der Geschmack deines Lieblingsessens
- [] 66: Lieblings-TV-Programm
- [] 67: Lieblingsfilm
- [] 68: Gehe zu neuen Orten
- [] 69: Die Fähigkeit zu untersuchen, was immer Sie wollen (es gibt über 7 Milliarden Menschen auf der Erde, haben Sie keine Angst, Sie selbst zu sein)
- [] 70: Um Geld und Belohnungen zu verdienen
- [] 71: Du kannst dein Leben immer auf den Kopf stellen.
- [] 72: Um den perfekten Job / Karriere für dich zu finden
- [] 73: Pizza
- [] 74: Kätzchen
- [] 75: Neue Haarschnitte
- [] 76: Momente, über die man nachdenken und lachen kann
- [] 77: Die Wolken
- [] 78: Die Welt ist besser mit dir drin
- [] 79: Achterbahn
- [] 80: Duschen
- [] 81: Kuchen
- [] 82: Älter werden
- [] 83: Alt werden mit dem, den du liebst
- [] 84: Singen
- [] 85: Schlafen
- [] 86: Eiscreme
- [] 87: Kekse
- [] 88: Essen im Allgemeinen
- [] 89: Filmabende
- [] 90: Süßigkeiten
- [] 91: Popcorn
- [] 92: Tagträumen
- [] 93: Glückliche Momente
- [] 94: Halloween
- [] 95: Übernachtung
- [] 96: Feiertage
- [] 97: Habe eine gute Persönlichkeit
- [] 98: Menschen glücklich machen
- [] 99: Lagerfeuer
- [] 100: Auf den Dächern sitzen
- [] 101: Feiertage
- [] 102: Hör dir verrückte Geschichten an
- [] 103: Verrückte Geschichten erzählen
- [] 104: Baumhäuser
- [] 105: Starbucks
- [] 106: Du hast das Leben von jemandem verändert
- [] 107: Wenn du gehst, wie willst du dann großartige Dinge erreichen?
- [] 108: Jeder hat Talent, auch du
- [] 109: Verrücktes Essen essen
- [] 110: Geh mit deinen Freunden aus `)).then(message.author.send(`- [] 111: Niemand kann dich jemals ersetzen
- [] 112: Du hast so viel zu leben
- [] 113: Deine Träume müssen verwirklicht werden
- [] 114: Lebe das Leben in vollen Zügen
- [] 115: Verdammt, ich werde dich wie verrückt vermissen
- [] 116: Deine Familie und Freunde wären am Boden zerstört, wenn du gehen würdest
- [] 117: Jemand da draußen betet ständig darum, jemanden wie dich zu treffen
- [] 118: Deine Zukunft
- [] 119: Du könntest so viele Leben retten
- [] 120: Du bist zu schön um zu verschwinden
- [] 121: Du bist größer als alle deine Probleme
- [] 122: Du bist während dieses Kampfes nie allein
- [] 123: Morgen ist ein neuer Tag!
- [] 124: Du bist mehr wert als du denkst
- [] 125: Aber das letzte und wichtigste ist, das Leben einfach erleben zu können, denn auch wenn dein Leben gerade nicht so groß erscheint, kann alles passieren!

💗💗

Lieder die dich glücklich machen könnten
HRVY Persönlich: @YJpE
Ich mag mich besser von Lauv: @ozwA
Klassiker von MKTO: @ A4Ds
Nur Freunde von JORDY: @eINM
Eastside von Benny Blanco, Halsey & Khalid: @UvGY
Was macht dich schön bei 1D: @ -A4E
Cheerleader von OMI: @ QfW8
Jeder spricht von Neon Trees: @ 84lE
Lieber zukünftiger Ehemann von Meghan Trainor: @ D_40
Backyard Boy von Claire Rosinkranz: @ shy8
Halt die Klappe und tanz mit mir von WALK THE MOON: @ lx6Q
iSpy von KYLE: @gMPU
Trap Queen von Fetty Wap: @NKio
LMK von Lil XXEL: @ IC24
Dynamit von BTS: @WNZg
`)).then(message.author.send(`- lustige Fakten!

1. Otter halten sich beim Schlafen an den Händen, wenn sie sich nicht voneinander entfernen
2. Pinguine haben für ihr ganzes Leben nur einen Partner, sie schlagen auch vor, ihnen einen Kieselstein zu geben
3. Kühe haben beste Freunde
4. du bist perfekt <3
- noch eine Nachricht: -

💗💗

An all diese gemobbten Leute
- An all die Menschen, die einen geliebten Menschen verloren haben
- An alle Menschen, die ein Haustier verloren haben
- An all die Menschen, die missbraucht werden
- An alle Menschen, die an Depressionen leiden
- An alle Menschen mit Angst
- An all die Menschen in Armut
- An all die Menschen, die eine Trennung durchmachen
- An all die Menschen, die einen schlechten Tag hatten
- An alle Menschen mit Unsicherheiten
- An all die Menschen, die eine schwere Zeit durchmachen

Nicht vergessen
- Deine Schwäche heute
- Ist es deine Stärke morgen?
- Es wird immer besser
- Deine Lieben werden in deinen Herzen bleiben
- Du hast immer die Erinnerungen
- Dich selbst lieben
- Steh für dich ein
- Geld kann kein Glück kaufen
- Diese Liebhaber
- Es war einfach nicht fair
- Beschimpfe dich nicht
- Missbrauche andere nicht
- Töte sie mit Freundlichkeit
- Behandle Menschen mit Freundlichkeit
- Wir alle hatten diese Zeiten
- Es wird immer ein Loch in unserer Brust geben

Aber
- Lasst uns alle die Stärke anderer sein
- wenn du bist
- Schwarz
- Bianca
- LGBTQ +
- Christian
- Atheist
- Usw

- Dich selbst lieben
- Liebe andere
- Nicht schneiden
- Töte nicht
- Nicht kritisieren
- Nicht betteln
- Nehme keine Drogen
- Verhungere nicht
- Lass andere nicht hungern

Wir sollten so etwas nicht tun
- Behalte deine Kraft bei
- Bewahre deinen Glauben
- Ändere dich nicht, weil es dir gesagt wurde
- Sei du selbst
- Manchmal ist es nicht das Beste, einen Charakter zu spielen. Habt einen schönen Tag und hört nicht auf, Bewusstsein für die Dinge zu verbreiten, die gerade in der Welt passieren.`)).then(message.author.send("<3"))
  }
}
}