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
    if (message.content === '!LIFAP6-CM-Visio') {

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
    if (message.content === '!LIFAP6-TD1-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD1.pdf');

        const attachment = new MessageAttachment(buffer, 'TD1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD2-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD2.pdf');

        const attachment = new MessageAttachment(buffer, 'TD2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD3-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD3.pdf');

        const attachment = new MessageAttachment(buffer, 'TD3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD4-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD4.pdf');

        const attachment = new MessageAttachment(buffer, 'TD4.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD5-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD5.pdf');

        const attachment = new MessageAttachment(buffer, 'TD5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD6-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD6.pdf');

        const attachment = new MessageAttachment(buffer, 'TD6.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD7-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD7.pdf');

        const attachment = new MessageAttachment(buffer, 'TD7.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD8-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TD/TD8.pdf');

        const attachment = new MessageAttachment(buffer, 'TD8.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD9-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD9.pdf');

        const attachment = new MessageAttachment(buffer, 'TD9.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD10-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD10.pdf');

        const attachment = new MessageAttachment(buffer, 'TD10.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }

    //TDGROUPE
    if (message.content === '!LIFAP6-TD-Visio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A: https://classe-info.univ-lyon1.fr/niv-oyu-jtx-qys **-- \n --** GROUPE B: https://classe-info.univ-lyon1.fr/lou-zb8-vqh-gjo **-- \n --** GROUPE C: https://classe-info.univ-lyon1.fr/fra-cvr-aby-wkf **-- \n`);
    }

    //TPGROUPE
    if (message.content === '!LIFAP6-TP-Visio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A1: https://classe-info.univ-lyon1.fr/niv-oyu-jtx-qys **-- \n --** GROUPE A2: https://classe-info.univ-lyon1.fr/cre-at1-510-pul **-- \n --** GROUPE B1: https://classe-info.univ-lyon1.fr/lou-zb8-vqh-gjo **-- \n --** GROUPE B2: https://classe-info.univ-lyon1.fr/mig-9cm-ucf-6lb **-- \n --** GROUPE C1: https://classe-info.univ-lyon1.fr/fra-cvr-aby-wkf **-- \n --** GROUPE C2: https://classe-info.univ-lyon1.fr/ieh-72u-eqx-ksy **--`);
    }


    //TPSUJET
    if (message.content === '!LIFAP6-TP1-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du TP1 https://forge.univ-lyon1.fr/lifap6/tp-listes-etu `);
    }
    if (message.content === '!LIFAP6-TP2-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/TP/TP2.pdf');

        const attachment = new MessageAttachment(buffer, 'TP2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFAP6-TP3-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du TP3 https://forge.univ-lyon1.fr/lifap6/tp-union-find-etu `);
    }
    if (message.content === '!LIFAP6-TP4-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du TP4 https://forge.univ-lyon1.fr/lifap6/tp-avl-etu `);
    }








    //LIFASR7
    //CM
    if (message.content === '!LIFARS7-CM-Visio') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du cours https://classe-info.univ-lyon1.fr/moy-rl4-sgf-8it `);
    }
    if (message.content === '!LIFASR7-CM-Vidéo') {
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
    if (message.content === '!LIFASR7-TD1-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD1.pdf');

        const attachment = new MessageAttachment(buffer, 'TD1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD2-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD2.pdf');

        const attachment = new MessageAttachment(buffer, 'TD2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD3-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/TD3.pdf');

        const attachment = new MessageAttachment(buffer, 'TD3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD4-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD4.pdf');

        const attachment = new MessageAttachment(buffer, 'TD4.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFASR7-TD5-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TD/TD5.pdf');

        const attachment = new MessageAttachment(buffer, 'TD5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }


    //TDGROUPE
    if (message.content === '!LIFASR7-TD-Visio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A: A Donner **-- \n --** GROUPE B: A Donner **-- \n --** GROUPE C: A Donner **-- \n`);
    }

    //TPGROUPE
    if (message.content === '!LIFASR7-TP-Visio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A1: A Donner **-- \n --** GROUPE A2: A Donner **-- \n --** GROUPE B1: A Donner **-- \n --** GROUPE B2: A Donner **-- \n --** GROUPE C1: A Donner **-- \n --** GROUPE C2: A Donner **--`);
    }


    //TPSUJET
    if (message.content === '!LIFASR7-TP1-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP1.pdf');

        const attachment = new MessageAttachment(buffer, 'TP1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP2-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP2.pdf');

        const attachment = new MessageAttachment(buffer, 'TP2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP3-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP3.pdf');

        const attachment = new MessageAttachment(buffer, 'TP3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP4-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP4.pdf');

        const attachment = new MessageAttachment(buffer, 'TP2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP5-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP5.pdf');

        const attachment = new MessageAttachment(buffer, 'TP5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR7-TP6-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TP6.pdf');

        const attachment = new MessageAttachment(buffer, 'TP6.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }



    //Réseaux
    //CM
    if (message.content === '!LIFASR6-CM-Visio') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        message.channel.send(`${message.author}, Voici le lien du cours https://univ-lyon1.webex.com/univ-lyon1/j.php?MTID=m9c81181a95ddfc034ca2877765725537 `);
    }
    if (message.content === '!LIFASR6-CM-Vidéo') {
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
    if (message.content === '!LIFASR7-CM5') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM5.pdf');

        const attachment = new MessageAttachment(buffer, 'CM5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR7-CM6') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM6.pdf');

        const attachment = new MessageAttachment(buffer, 'CM6.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR7-CM7') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM7.pdf');

        const attachment = new MessageAttachment(buffer, 'CM7.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR7-CM8') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM4.pdf');

        const attachment = new MessageAttachment(buffer, 'CM8.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }


    //###TD###//
    if (message.content === '!LIFASR6-TD-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/TD/TD.pdf');

        const attachment = new MessageAttachment(buffer, 'FeuillesTD.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet des TD`, attachment);
    }



    //TDGROUPE
    if (message.content === '!LIFASR6-TD-Visio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A: A Donner **-- \n --** GROUPE B: A Donner **-- \n --** GROUPE C: A Donner **-- \n`);
    }

    //TPGROUPE
    if (message.content === '!LIFASR6-TP-Visio') {

        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},\n --** GROUPE A1: A Donner **-- \n --** GROUPE A2: A Donner **-- \n --** GROUPE B1: A Donner **-- \n --** GROUPE B2: A Donner **-- \n --** GROUPE C1: A Donner **-- \n --** GROUPE C2: A Donner **--`);
    }


    //TPSUJET
    if (message.content === '!LIFASR6-TPR1-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/TP/TPR1.pdf');

        const attachment = new MessageAttachment(buffer, 'TPR1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPR2-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TPR2.pdf');

        const attachment = new MessageAttachment(buffer, 'TPR2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPF1-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR6/TP/TPF1.pdf');

        const attachment = new MessageAttachment(buffer, 'TPF1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPF2-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/TP/TPF2.pdf');

        const attachment = new MessageAttachment(buffer, 'TPF2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TP`, attachment);
    }
    if (message.content === '!LIFASR6-TPF3-Sujet') {
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
});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);

