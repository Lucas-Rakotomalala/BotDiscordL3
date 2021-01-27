// Extract the required classes from the discord.js module
const { Client, MessageAttachment } = require('discord.js');

// Import the native fs module
const fs = require('fs');

// Create an instance of a Discord client
const client = new Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    // LIFAP6
    //###CM##//
    if (message.content === '!LIFAP6-CMVisio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le lien du cours https://classe-info.univ-lyon1.fr/niv-oyu-jtx-qys`);
    }
    if (message.content === '!LIFAP6-CM1') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/intro.pdf');

        const attachment = new MessageAttachment(buffer, 'CM1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }

    //###TD###//
    if (message.content === '!LIFAP6-TD1Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD1.pdf');

        const attachment = new MessageAttachment(buffer, 'TD1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD2Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD2.pdf');

        const attachment = new MessageAttachment(buffer, 'TD2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD3Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD3.pdf');

        const attachment = new MessageAttachment(buffer, 'TD3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD4Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD4.pdf');

        const attachment = new MessageAttachment(buffer, 'TD4.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD5Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD5.pdf');

        const attachment = new MessageAttachment(buffer, 'TD5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD6Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD6.pdf');

        const attachment = new MessageAttachment(buffer, 'TD6.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD7Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD7.pdf');

        const attachment = new MessageAttachment(buffer, 'TD7.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD8Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD8.pdf');

        const attachment = new MessageAttachment(buffer, 'TD8.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD9Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD9.pdf');

        const attachment = new MessageAttachment(buffer, 'TD9.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD10Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD10.pdf');

        const attachment = new MessageAttachment(buffer, 'TD10.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }

    //TDGROUPE
    if (message.content === '!LIFAP6-TDVisio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A: https://classe-info.univ-lyon1.fr/niv-oyu-jtx-qys **-- \n --** GROUPE B: https://classe-info.univ-lyon1.fr/lou-zb8-vqh-gjo **-- \n --** GROUPE C: https://classe-info.univ-lyon1.fr/fra-cvr-aby-wkf **-- \n`);
    }

    //TPGROUPE
    if (message.content === '!LIFAP6-TPVisio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A1: https://classe-info.univ-lyon1.fr/niv-oyu-jtx-qys **-- \n --** GROUPE A2: https://classe-info.univ-lyon1.fr/cre-at1-510-pul **-- \n --** GROUPE B1: https://classe-info.univ-lyon1.fr/lou-zb8-vqh-gjo **-- \n --** GROUPE B2: https://classe-info.univ-lyon1.fr/mig-9cm-ucf-6lb **-- \n --** GROUPE C1: https://classe-info.univ-lyon1.fr/fra-cvr-aby-wkf **-- \n --** GROUPE C2: https://classe-info.univ-lyon1.fr/ieh-72u-eqx-ksy **--`);
    }


    //TPSUJET
    if (message.content === '!LIFAP6-TP1Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du TP1 https://forge.univ-lyon1.fr/lifap6/tp-listes-etu `);
    }
    if (message.content === '!LIFAP6-TP2Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TP/TP2.pdf');

        const attachment = new MessageAttachment(buffer, 'TP2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFAP6-TP3Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du TP3 https://forge.univ-lyon1.fr/lifap6/tp-union-find-etu `);
    }
    if (message.content === '!LIFAP6-TP4Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du TP4 https://forge.univ-lyon1.fr/lifap6/tp-avl-etu `);
    }








    //LIFASR7
    //CM
    if (message.content === '!LIFASR7-CMVisio') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du cours https://classe-info.univ-lyon1.fr/moy-rl4-sgf-8it `);
    }
    if (message.content === '!LIFASR7-CMVidéo') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien pour les vidéos  https://www.youtube.com/playlist?list=PL6-YbcqXawf7wl23TTE8Oy6LZV2T4k1Xg `);
    }
    if (message.content === '!LIFASR7-CM1') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM1.pdf');

        const attachment = new MessageAttachment(buffer, 'CM1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR7-CM2') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM2.pdf');

        const attachment = new MessageAttachment(buffer, 'CM2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR7-CM3') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM3.pdf');

        const attachment = new MessageAttachment(buffer, 'CM3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR7-CM4') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM4.pdf');

        const attachment = new MessageAttachment(buffer, 'CM4.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }


    //###TD###//
    if (message.content === '!LIFASR7-TD1Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD1.pdf');

        const attachment = new MessageAttachment(buffer, 'TD1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD2Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD2.pdf');

        const attachment = new MessageAttachment(buffer, 'TD2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD3Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/TD3.pdf');

        const attachment = new MessageAttachment(buffer, 'TD3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD4Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD4.pdf');

        const attachment = new MessageAttachment(buffer, 'TD4.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD5Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD5.pdf');

        const attachment = new MessageAttachment(buffer, 'TD5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }


    //TDGROUPE
    if (message.content === '!LIFASR7-TDVisio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A: A Donner **-- \n --** GROUPE B: A Donner **-- \n --** GROUPE C: A Donner **-- \n`);
    }

    //TPGROUPE
    if (message.content === '!LIFASR7-TPVisio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A1: A Donner **-- \n --** GROUPE A2: A Donner **-- \n --** GROUPE B1: A Donner **-- \n --** GROUPE B2: A Donner **-- \n --** GROUPE C1: A Donner **-- \n --** GROUPE C2: A Donner **--`);
    }


    //TPSUJET
    if (message.content === '!LIFASR7-TP1Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP1.pdf');

        const attachment = new MessageAttachment(buffer, 'TP1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP2Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP2.pdf');

        const attachment = new MessageAttachment(buffer, 'TP2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP3Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP3.pdf');

        const attachment = new MessageAttachment(buffer, 'TP3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP4Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP4.pdf');

        const attachment = new MessageAttachment(buffer, 'TP2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP5Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP5.pdf');

        const attachment = new MessageAttachment(buffer, 'TP5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP6Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP6.pdf');

        const attachment = new MessageAttachment(buffer, 'TP6.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }



    //Réseaux
    //CM
    if (message.content === '!LIFASR6-CMVisio') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du cours https://univ-lyon1.webex.com/univ-lyon1/j.php?MTID=m9c81181a95ddfc034ca2877765725537 `);
    }
    if (message.content === '!LIFASR6-CMVidéo') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien pour les vidéos  https://perso.univ-lyon1.fr/olivier.gluck/Cours/Supports/L3IF_RE/Videos-CM/ `);
    }
    if (message.content === '!LIFASR6-CM1') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/CM/CM1.pdf');

        const attachment = new MessageAttachment(buffer, 'CM1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR6-CM2') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/CM/CM2.pdf');

        const attachment = new MessageAttachment(buffer, 'CM2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR6-CM3') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/CM/CM3.pdf');

        const attachment = new MessageAttachment(buffer, 'CM3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR6-CM4') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/CM/CM4.pdf');

        const attachment = new MessageAttachment(buffer, 'CM4.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR6-CM5') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM5.pdf');

        const attachment = new MessageAttachment(buffer, 'CM5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR6-CM6') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM6.pdf');

        const attachment = new MessageAttachment(buffer, 'CM6.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR6-CM7') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM7.pdf');

        const attachment = new MessageAttachment(buffer, 'CM7.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR6-CM8') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM4.pdf');

        const attachment = new MessageAttachment(buffer, 'CM8.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }


    //###TD###//
    if (message.content === '!LIFASR6-TDSujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/TD/TD.pdf');

        const attachment = new MessageAttachment(buffer, 'FeuillesTD.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet des TD`, attachment);
    }



    //TDGROUPE
    if (message.content === '!LIFASR6-TDVisio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A: A Donner **-- \n --** GROUPE B: A Donner **-- \n --** GROUPE C: A Donner **-- \n`);
    }

    //TPGROUPE
    if (message.content === '!LIFASR6-TPVisio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A1: A Donner **-- \n --** GROUPE A2: A Donner **-- \n --** GROUPE B1: A Donner **-- \n --** GROUPE B2: A Donner **-- \n --** GROUPE C1: A Donner **-- \n --** GROUPE C2: A Donner **--`);
    }


    //TPSUJET
    if (message.content === '!LIFASR6-TPR1Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/TP/TPR1.pdf');

        const attachment = new MessageAttachment(buffer, 'TPR1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPR2Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TPR2.pdf');

        const attachment = new MessageAttachment(buffer, 'TPR2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPF1Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/TP/TPF1.pdf');

        const attachment = new MessageAttachment(buffer, 'TPF1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPF2Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TPF2.pdf');

        const attachment = new MessageAttachment(buffer, 'TPF2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPF3Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TPF3.pdf');

        const attachment = new MessageAttachment(buffer, 'TPF3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }



    //OPtimisation
    if (message.content === '!Optimisation-CM1') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./opti/CM/CM1.pdf');

        const attachment = new MessageAttachment(buffer, 'CM1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }




    //AlgoNumérique
    if (message.content === '!Algo-CM1') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./AlgoNum/CM/CM1.pdf');

        const attachment = new MessageAttachment(buffer, 'CM1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }

    const messageBienvenue = 'Salut à toi jeune Etudiant ou Etudiante! Comme je dirais il n\' y a pas de questions bête, juste des étudinats. ';
    messageBienvenue += ' \n Je vais quand même t\' aider pour ce dernier semestre. ';
    messageBienvenue += ' \n Je suis un bot qui va te donner les liens des visios ou les pdfs des CM/TD/TP de tes cours.';
    messageBienvenue += '\n Comment c\' est possible ? Tape la commande !help pour voir comment fonctionne.'
    messageBienvenue += '\n Je cherche une ou deux personnes qui peut donner les informations suivantes: ';
    messageBienvenue += '\n -AMALA B + Algèbre: Liens et PDF des CM/TD/TP';
    messageBienvenue += '\n -BDW2 + LIFAP7: Liens et PDF des CM/TD/TP';
    messageBienvenue += '\n -LIFASR6: Liens TD/TP (Après affectation)';
    messageBienvenue += '\n -LIFASR7: Liens TD/TP des Groupes A et B (liens visio)';
    messageBienvenue += '\n -AlgoNumérique + Optimisation: Liens TD/TP';
    messageBienvenue += '\n \n Pour cela contactez lucas rakotomalala en privé pour qu\'il puisse mettre à jour ';
    messageBienvenue += 'ou de rajouter des fonctionnalités ';
    messageBienvenue += '\n Grogu vous donne de la force.';
    messageBienvenue += '`\n Xuxu.';
    messageBienvenue += '\n Allez tape !help pour visualisez les commandes.'

    if (message.content === '!HelloXuxu') {
        message.channel.send(`@everyone \n ${messageBienvenue}');
    }



});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);

