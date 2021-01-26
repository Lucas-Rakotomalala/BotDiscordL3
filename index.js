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
    if (message.content === '!LIFAP6-Visio') {

        const url = 'https://classe-info.univ-lyon1.fr/niv-oyu-jtx-qys';
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours le lien du cours`);
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
        const buffer = fs.readFileSync('./LIFAP6/CM/TD1.pdf');

        const attachment = new MessageAttachment(buffer, 'TD1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD2-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD1.pdf');

        const attachment = new MessageAttachment(buffer, 'TD2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD3-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD3.pdf');

        const attachment = new MessageAttachment(buffer, 'TD3.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD4-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD4.pdf');

        const attachment = new MessageAttachment(buffer, 'TD4.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD5-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD5.pdf');

        const attachment = new MessageAttachment(buffer, 'TD5.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD6-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD6.pdf');

        const attachment = new MessageAttachment(buffer, 'TD6.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD7-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD7.pdf');

        const attachment = new MessageAttachment(buffer, 'TD7.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici le sujet de votre TD`, attachment);
    }
    if (message.content === '!LIFAP6-TD8-Sujet') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFAP6/CM/TD8.pdf');

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






    //LIFASR7
    if (message.content === '!LIFASR7-CM1') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM1.pdf');

        const attachment = new MessageAttachment(buffer, 'CM1.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }
    if (message.content === '!LIFASR7-CM2') {
        // Get the buffer from the 'memes.txt', assuming that the file exists
        const buffer = fs.readFileSync('./LIFASR7/CM/CM1.pdf');

        const attachment = new MessageAttachment(buffer, 'CM2.pdf');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author}, Voici votre cours`, attachment);
    }

});

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);

